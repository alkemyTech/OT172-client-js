import React from 'react'
import { Formik, Form } from 'formik'
import { Container, Title, SubTitle } from './styles'

export const FormikForm = ({
  title,
  subtitle,
  values,
  schema,
  onSubmit,
  FormFields
}) => {
  return (
    <Container>
      <Title> {title} </Title>
      <SubTitle> {subtitle} </SubTitle>
      <Formik
        initialValues={values}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <Form>
          <FormFields />
        </Form>
      </Formik>
    </Container>
  )
}
