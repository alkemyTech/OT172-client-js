import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: .5rem;
  width: 20rem;
  input {
    border: 1px solid #dadde1;
    height: 100% ;
  }
  input:hover {
    border-color: #764abc ;
  }
`

export const FormContainerCKE = styled.div`
  width: 100%;
  min-height: 15rem;
  justify-content: 100% ;
  
`

export const CustomInput = styled.input`
  width:100%;
`
