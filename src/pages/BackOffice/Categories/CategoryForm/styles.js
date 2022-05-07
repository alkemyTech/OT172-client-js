import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
`

export const Container = styled.div`
  border: 1px solid red;
  width: 400px;
  margin: auto ;
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