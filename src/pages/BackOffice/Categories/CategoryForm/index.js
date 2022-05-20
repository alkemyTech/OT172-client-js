import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { categorySchema } from 'components/Forms/schemas'
import { FormikForm } from 'components/Forms'
import { FormField } from 'components/Forms/formField'
import { getService } from 'services/apiService'
import { ENDPOINT_CATEGORIES } from 'services/settings'
import { TiArrowBack } from 'react-icons/ti'
import { createCategories, updateCategories } from 'store/slices/categories'
import { alertToast } from 'services/alerts'
import Loader from 'components/utils/Loader'
import { Button, Container } from 'components/Forms/styles'
import { LinkStyled } from 'common/styles'

const FormFields = (editar = false) => {
  return (
    <>
      <FormField
        name='name'
        type='text'
        placeholder='Nombre'
      />
      <FormField
        name='description'
        type='text'
        placeholder='Descripcion'
        as='textarea'
      />
      <Button type='submit'>{editar ? 'Editar' : 'Agregar'}</Button>
    </>
  )
}

export const CategoryForm = () => {
  const { isError, isSuccess, isLoading, message } = useSelector(state => state.categories)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const params = useParams()

  const values = {
    name: '',
    description: ''
  }

  const [category, setCategory] = useState(values)

  useEffect(() => {
    (async () => {
      if (params.id) {
        const response = await getService(ENDPOINT_CATEGORIES, params.id)
        const { name, description } = response.data

        setCategory({
          name,
          description
        })
      }
    })()
  }, [params.id, getService])

  const handleSubmit = (values, actions) => {
    if (params.id) {
      dispatch(updateCategories({ ...values, id: params.id }))
    } else {
      dispatch(createCategories(values))
    }
    if (isSuccess) alertToast('success', params.id ? 'Categoria editada correctamente!' : 'Categoria agregada correctamente!')
    if (isError) alertToast('error', message)

    actions.setSubmitting(false)
    actions.resetForm()
    navigate('/backoffice/categories')
  }

  if (isLoading) return <Loader />

  return (
    <Container>
      <LinkStyled to='/backoffice/categories'><TiArrowBack /> Volver a Categorias</LinkStyled>
      <FormikForm
        title='Back Office'
        subtitle='Administracion de categorias, editar el nombre o la descripción de una categoría.'
        values={category}
        schema={categorySchema}
        onSubmit={handleSubmit}
        FormFields={() => FormFields(!!params.id)}
      />
    </Container>
  )
}
