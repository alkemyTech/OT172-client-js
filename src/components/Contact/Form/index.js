import React, { useState } from "react"
import { FormikForm } from "../../Forms"
import { FormField } from "../../Forms/formField"
import { contactSchema } from "components/Forms/schemas" 
import {FormContainer}from "./styles"

const FormFields = () =>{
    return (
        <>
            <FormField
                name= "firstName"
                type= "text"
                placeholder= "Nombre"
                FormContainer={FormContainer}
            />
            <FormField
                name="lastName"
                type="text"
                placeholder="Apellido"
                FormContainer={FormContainer}
            />
            <FormField
                name="email"
                type="email"
                placeholder="Email de contacto"
                FormContainer={FormContainer}
            />
            
            <FormField
                name="message"
                type="text"
                placeholder="Mensaje para la orgnaizacion"
                FormContainer={FormContainer}
            />
            <button type="submit">Enviar</button>
        </>
    )
}

export const ContactForm= ()=>{
    const [values, setValues]= useState({
        firstName:"",
        lastName:"",
        email:"",
        message:""
    })

    const handleSubmit = (values)=>{
        console.log(values)
    }
    return(
        <FormikForm
            title="Bienvenid@ a Somos Más"
            subtitle="Desde 1997 generando procesos de crecimiento y de inserción social"
            operationName="Contactarse con nosotros"
            values={values}
            schema={contactSchema}
            onSubmit={handleSubmit}
            FormFields={() => FormFields()}
        />
    )
}