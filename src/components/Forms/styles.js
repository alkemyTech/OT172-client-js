import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: auto;
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

export const Title = styled.h2`
  color: green;
`

export const SubTitle = styled.h4`
  color: blue;
`

export const OperationName= styled.h3`
  color: black;
`

export const ErrorMessageFormik= styled.div`
  color:red;
  font-size:15px;
`

export const Button = styled.button`
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryDark};
  text-decoration: none;
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

export const CustomInput = styled.div`
  input {
    border: 1px solid ${({ theme }) => theme.primaryLightBorderInput};
    font-size: 1.2rem;
    padding: .5rem 1rem;
    margin-bottom: 1rem;
    width: ${props => props.width || '20rem' };

    color: ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.primaryLight};
    
    &:hover {
      border: 1px solid ${({ theme }) => theme.primaryLightBorderInputHover};
    }
  }
`