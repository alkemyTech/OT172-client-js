import React from 'react'
import { Formik, Form } from 'formik'
import { Container, Title, SubTitle, OperationName, CustomInput, ContainerFormik } from './styles'

export const FormikForm = ({
  title,
  subtitle,
  operationName,
  values,
  schema,
  onSubmit,
  FormFields,

}) => {
  return (
    <Container>
      <Title> {title} </Title>
      <SubTitle> {subtitle} </SubTitle>
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
