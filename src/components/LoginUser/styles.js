import styled from 'styled-components'

// export const FormContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   width: 30%;
// `

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

export const Container = styled.div`
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
export const Button = styled.button`
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryDark};
  text-decoration: none;
  cursor: pointer; 
  background-color: ${({ theme }) => theme.primaryLight};
  border: 2px solid ${({ theme }) => theme.primaryDark} ;
  cursor: pointer;
  display: block ;
  width: auto;
  margin: auto ;
  padding: .6rem 1.2rem;
  
  &:hover {
    color: ${({ theme }) => theme.primaryLight};
    /* background-color: ${({ theme }) => theme.primaryDark}; */
    background-color: var(--black-01);
    /* border: 2px solid ${({ theme }) => theme.primaryLight}; */
  }
  transition: all .3s ease, visibility 0s;

`