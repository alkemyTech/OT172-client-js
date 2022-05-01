import styled from 'styled-components'

export const FormContainer = styled.div`
  display: wrapp;
  justify-content: center;
  flex-direction: column;
  width: 75%;
`

//With this we can style the fields with formik
export const CustomInput= styled.input`
  width:100%;
`
export const CustomTextArea= styled.textarea`
  resize:none;
  height:100px;
  width:100%;
  margin-top:10px
`