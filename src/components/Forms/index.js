import React from 'react'
import { Formik, Form } from 'formik'
import { Container, OperationName, ContainerFormik, Titles } from './styles'

export const FormikForm = ({
  title,
  subtitle,
  operationName,
  values,
  schema,
  onSubmit,
  FormFields

}) => {
  return (
    <Container>
      <Titles>
        <h2>{title}</h2>
        <span> {subtitle} </span>
      </Titles>
      <OperationName>{operationName}</OperationName>

      <ContainerFormik>
        <Formik
          initialValues={values}
          enableReinitialize
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          <Form>
            <FormFields />

          </Form>
        </Formik>

      </ContainerFormik>
    </Container>
  )
}
