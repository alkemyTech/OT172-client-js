import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userSchema } from "components/Forms/schemas";
import { FormikForm } from "components/Forms";
import { FormField } from "components/Forms/formField";
import { getService } from "services/apiService";
import { ENDPOINT_USERS } from "services/settings";
import { TiArrowBack } from "react-icons/ti";
import { createUsers, updateUsers } from "store/slices/users";
import { useSelector } from "react-redux";
import { alertToast } from "services/alerts";
import Loader from "components/utils/Loader";
import { Button, Container } from "components/Forms/styles";
import { LinkStyled } from "common/styles";


const FormFields = (editar=false) => {
  return (
    <>
      <FormField
        name="email"
        type="text"
        placeholder="Correo"
      />
      <FormField
        name="firstName"
        type="text"
        placeholder="Nombres"
      />
      <FormField
        name="lastName"
        type="text"
        placeholder="Apellidos"
      />
      <Button type="submit">{editar ? 'Editar' : 'Agregar'}</Button>
    </>
  )
}

export const UserForm = ({profile=false}) => {
  const {isError, isSuccess, isLoading, message } = useSelector(state => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const params = useParams()

  const actualProfile = JSON.parse(localStorage.getItem('user'))

  const values = {
    email: profile ? actualProfile.email : '',
    firstName: profile ? actualProfile.firstName : '',
    lastName: profile ? actualProfile.lastName : ''
  }

  const [user, setUser] = useState(values);

  useEffect(() => {
    (async () => {
      if (params.id) {
        const response = await getService(ENDPOINT_USERS, params.id);
        const { email, firstName, lastName } = response.data.user

        setUser({
          email,
          firstName,
          lastName
        });
      }
    })()
  }, [params.id, getService]);

  useEffect(() => {
    setUser(values)
  },[])

  const handleSubmit = (values,actions) => {
    if (params.id) {
      dispatch(updateUsers({...values, id:params.id}))
    } else {
      dispatch(createUsers(values))
    }
    if (isSuccess) alertToast('success',params.id ?'Usuario editado correctamente!':'Usuario agregado correctamente!')
    if (isError) alertToast('error',message)

    actions.setSubmitting(false);
    actions.resetForm();
    if (profile) {
      const actualProfile = JSON.parse(localStorage.getItem('user'))
      const updatedProfile = {...actualProfile, ...values}

      localStorage.setItem('user', JSON.stringify(updatedProfile))
      
      navigate(`/profile/edited`)
    } else {
      navigate("/backoffice/users")
    }
  }

  
  if(isLoading) return <Loader />

  return (
    <Container>
      {!profile &&
        <LinkStyled to={`/backoffice/users`}><TiArrowBack /> Volver a Usuarios</LinkStyled>
      }
  
        <FormikForm
        title={profile ? 'Edite su perfil' : 'Usuario'}
        subtitle={!profile && 'Administracion de usuarios, editar el nombre, el apellido o mail de un usuario registrado.'}
        values={user}
        schema={userSchema}
        onSubmit={handleSubmit}
        FormFields={() => FormFields(params.id ? true : false)}
      />
    </Container>
  )
}


