import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CustomInput, FormContainer, FormContainerCKE } from "./styles";
import { memberSchema } from "components/Forms/schemas";
import { FormikForm } from "components/Forms";
import { FormField, ImageField } from "components/Forms/formField";
import { getService } from "services/apiService";
import { ENDPOINT_MEMBERS } from "services/settings";
import { TiArrowBack } from "react-icons/ti";
import { createMembers, updateMembers } from "store/slices/members";
import { useSelector } from "react-redux";
import { alertToast } from "services/alerts";
import Loader from "components/utils/Loader";
import CKEditor from 'components/Forms/CKEditor/CreateCKEditor'
import { Button, Container } from "components/Forms/styles";
import { LinkStyled } from "common/styles";



const FormFields = (editar=false) => {
  return (
    <>
      <FormField
        name="name"
        type="text"
        placeholder="Nombre"
      />
       <ImageField
          name='image'
          type='file'
          placeholder='Foto de la actividad'
          as= {CustomInput}
        />
      <FormField
        name="description"
        type="text"
        placeholder="Descripcion"
        FormContainer={FormContainerCKE}
        as ={CKEditor}
      />
      <Button type="submit">{editar ? 'Editar' : 'Agregar'}</Button>
    </>
  )
}

export const MemberForm = () => {
  const {isError, isSuccess, isLoading, message } = useSelector(state => state.members)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const params = useParams()

  const values = {
    name: '',
    description: '',
    image:null
  }

  const [member, setMember] = useState(values);

  useEffect(() => {
    (async () => {
      if (params.id) {
        const response = await getService(ENDPOINT_MEMBERS, params.id);
        const { name, description, image } = response.data

        setMember({
          name,
          description,
          image
        });
      }
    })()
  }, [params.id, dispatch]);

  const handleSubmit = async (values,actions) => {
    if (params.id) {
      await dispatch(updateMembers({...values, id:params.id}))

    } else {
      await dispatch(createMembers(values))
    }
    
    if (isSuccess) alertToast('success',params.id ?'Actividad editada correctamente!':'Actividad agregada correctamente!')
    if (isError) alertToast('error',message)

    actions.setSubmitting(false);
    actions.resetForm();
    navigate("/backoffice/members")
  }

  
  if(isLoading) return <Loader />

  return (
    <Container>
      <LinkStyled to={`/backoffice/members`}><TiArrowBack /> Volver a Miembros</LinkStyled>
      <FormikForm
        title="Back Office"
        subtitle="Administracion de actividades, puede caragr una imagen y agregar un texto rico"
        values={member}
        schema={memberSchema}
        onSubmit={handleSubmit}
        FormFields={() => FormFields(params.id ? true : false)}
      />
    </Container>
  )
}


