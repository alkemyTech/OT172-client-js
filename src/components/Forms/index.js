import React from 'react'
import { Formik, Form } from 'formik'
import { Container, Title, SubTitle, OperationName } from './styles'

export const FormikForm = ({
  title,
  subtitle,
  operationName,
  values,
  schema,
  onSubmit,
  FormFields,
  Test
}) => {
  return (
    <Container>
      <Title> {title} </Title>
      <SubTitle> {subtitle} </SubTitle>
      <OperationName>{operationName}</OperationName>
      <Formik
        initialValues={values}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <Form>
          <FormFields />
          <Test />
        </Form>
      </Formik>
    </Container>
  )
}
