import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, FormContainer } from "./styles";
import { categorySchema } from "components/Forms/schemas";
import { FormikForm } from "components/Forms";
import { FormField } from "components/Forms/formField";
import { getService } from "services/apiService";
import { ENDPOINT_CATEGORIES } from "services/settings";
import { TiArrowBack } from "react-icons/ti";
import { createCategories } from "store/slices/categories";


const FormFields = () => {
  return (
    <>
      <FormField
        name="name"
        type="text"
        placeholder="Nombre"
        FormContainer={FormContainer}
      />
      <FormField
        name="description"
        type="text"
        placeholder="Descripcion"
        FormContainer={FormContainer}
      />
      <button type="submit">Aceptar</button>
    </>
  )
}

export const CategoryForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const params = useParams()

  const values = {
    name: '',
    description: ''
  }

  const [category, setCategory] = useState(values);

  useEffect(() => {
    (async () => {
      if (params.id) {
        const response = await getService(ENDPOINT_CATEGORIES, params.id);
        const { name, description } = response.data

        setCategory({
          name,
          description,
        });
      }
    })();
  }, [params.id, getService]);

  // //Login req
  const handleSubmit = (values,actions) => {
    console.log('···submiting',  category);
    if (params.id) {
      console.log('updatePost', values)

    } else {
      dispatch(createCategories(values))
    }
    actions.resetForm();
    actions.setSubmitting(false);
    navigate("/backoffice/categories");
  }

  // //Effects/notifications 
  // useEffect(() => {
  //     if(isError){
  //         alertToast('error',message)
  //     }
  //     if(isSuccess || user){
  //         alertToast('success','Inicio de sesión exitoso!')
  //         navigate('/home')
  //     }
  //     dispatch(reset())
  // }, [user, isError, isSuccess, message, navigate, dispatch])

  /*if(isLoading) {
    //Loading screen, check preserve the state of the fields for not write all again after re-render
  }*/

  return (
    <Container>
      <Link to={`/backoffice/categories`}><TiArrowBack /> Volver a Categorias</Link>
      <FormikForm
        title="Back Office"
        subtitle="Administracion de categorias"
        operationName="Agregar/Editar" /*Delete for delete Iniciar sesion text*/
        values={category}
        schema={categorySchema}
        onSubmit={handleSubmit}
        FormFields={() => FormFields()}
      />
    </Container>
  )
}


