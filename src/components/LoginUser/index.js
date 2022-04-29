import React, { useState } from "react"
import {FormikForm} from "../Forms"
import {FormField} from "../Forms/formField"
import { loginUserSchema } from "../Forms/schemas"
import { FormContainer } from "components/CreateUser/styles"

const FormFields = () =>{
    return (
        <>
            <FormField
                name= "email"
                type= "email"
                placeholder= "Email"
                FormContainer={FormContainer}
            />
            <FormField
                name="password"
                type="password"
                placeholder="Password"
                FormContainer={FormContainer}
            />
            <button type="submit">Crear</button>
        </>
    )
}

export const LoginUserForm= () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleSubmit= values=>{
        console.log(values);
    }
    return (
        <FormikForm
            title="Bienvenid@ a Somos Más"
            subtitle="Desde 1997 generando procesos de crecimiento y de inserción social"
            operationName="Iniciar sesión" /*Delete for delete Iniciar sesion text*/
            values={values}
            schema={loginUserSchema}
            onSubmit={handleSubmit}
            FormFields={() => FormFields()}
        />
    )
}