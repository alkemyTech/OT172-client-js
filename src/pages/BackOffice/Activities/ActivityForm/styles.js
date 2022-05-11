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

export const FormContainerCKE = styled(FormContainer)`
  width: 100%;
  min-height: 15rem;
  justify-content: 100% ;
  /* .ck-editor__editable {
    min-height: 20rem;
} */
  input {
    border: 2px solid #dadde1 !important ;
    height: 100% ;
  }
`
export const Button = styled.button`
    background-color: #eae7fe;
    border-color: transparent ;
    border-radius: 5rem ;
    cursor: pointer;
    display: block ;
    width: 10rem;
    margin: auto ;
`
export const Container = styled.div`
border: 1px solid red ;
  width: 100%;
  margin: auto;
  color: black;
  padding: 1rem;

  a {
    text-align: center ;
    font-size: 1rem;
    text-decoration: none;
    &:hover {
      color: #0000FF
    }
    svg {
      padding-left: 2rem ;
    }
  }
`

export const CustomInput= styled.input`
  width:100%;
`