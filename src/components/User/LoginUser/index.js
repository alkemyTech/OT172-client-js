import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from 'store/slices/auth/index'
import { alertToast } from 'services/alerts'
import { useNavigate } from 'react-router-dom'
import { Button } from "components/Forms/styles"
import { FormField } from "components/Forms/formField"
import { loginUserSchema } from "components/Forms/schemas"
import { FormikForm } from "components/Forms"
import Loader from "components/utils/Loader"

const FormFields = () => {
    return (
        <>
            <FormField
                name="email"
                type="email"
                placeholder="Email"
            />
            <FormField
                name="password"
                type="password"
                placeholder="Password"
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

    if (isLoading) return <Loader />

    return (
        <FormikForm
            title="Bienvenid@ a Somos Más"
            subtitle="Desde 1997 generando procesos de crecimiento y de inserción social"
            values={values}
            schema={loginUserSchema}
            onSubmit={handleSubmit}
            FormFields={() => FormFields()}
        />
    )
}