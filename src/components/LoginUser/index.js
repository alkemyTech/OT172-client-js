import React, { useEffect } from "react"
import { FormikForm } from "../Forms"
import { FormField } from "../Forms/formField"
import { loginUserSchema } from "../Forms/schemas"
import { Button, Container, FormContainer } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../../store/slices/auth/index'
import { alertToast } from 'services/alerts'
import { useNavigate } from 'react-router-dom'
const FormFields = () => {
    return (
        <>
            <FormField
                name="email"
                type="email"
                placeholder="Email"
                FormContainer={FormContainer}
            />
            <FormField
                name="password"
                type="password"
                placeholder="Password"
                FormContainer={FormContainer}
            />
            <Button type="submit">Iniciar sesion</Button>
        </>
    )
}

export const LoginUserForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
    const values = {
        email: '',
        password: ''
    }

    //Login req
    const handleSubmit = values => {
        dispatch(login(values))
    }

    //Effects/notifications 
    useEffect(() => {
        if (isError) {
            alertToast('error', message)
        }
        if (isSuccess || user) {
            alertToast('success', 'Inicio de sesión exitoso!')
            navigate('/home')
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    /*if(isLoading) {
      //Loading screen, check preserve the state of the fields for not write all again after re-render
    }*/

    return (
        <Container>
            <FormikForm
                title="Bienvenid@ a Somos Más"
                subtitle="Desde 1997 generando procesos de crecimiento y de inserción social"
                operationName="Iniciar sesión" /*Delete for delete Iniciar sesion text*/
                values={values}
                schema={loginUserSchema}
                onSubmit={handleSubmit}
                FormFields={() => FormFields()}
            />
        </Container>
    )
}