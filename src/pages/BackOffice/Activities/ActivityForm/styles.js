import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: .5rem;
  width: 70%;
  input {
    border: 1px solid #dadde1;
    height: 100% ;
  }
  input:hover {
    border-color: #764abc ;
  }
`
export const Button = styled.button`
    background-color: #eae7fe;
    border-color: transparent ;
    border-radius: 5rem ;
    cursor: pointer;
    display: block ;
    width: 70%;
`
export const Container = styled.div`
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