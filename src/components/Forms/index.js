import React from 'react'
import { Formik, Form } from 'formik'
import { Container, Title, SubTitle, OperationName } from './styles'

export const FormikForm = ({
  title,
  subtitle,
  operationName,/*Delete for delete Iniciar sesion text*/
  values,
  schema,
  onSubmit,
  FormFields
}) => {
  return (
    <Container>
      <Title> {title} </Title>
      <SubTitle> {subtitle} </SubTitle>
      <OperationName>{operationName}</OperationName> {/*Delete for delete Iniciar sesion text*/}
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
