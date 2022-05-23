import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: auto;
  padding: 1rem;
  text-align: left;
`

export const ContainerFormik = styled.div`
  padding-top: 2rem;
`

export const Titles = styled.div`
  display: flex ;
  flex-direction: column ;
  justify-content: center ;
  h2 {
    color: ${({ theme }) => theme.primaryDark};
    margin-bottom: .1rem ;
    text-align: center;
  }
  span {
    color: ${({ theme }) => theme.secondaryDark};
    margin-top: .4rem ;
    text-align: center;
    align-self: center;
    max-width: 60% ;
  }
`

export const OperationName = styled.h3`
  color: black;
`
export const ConatinerButtons = styled.div`
  display: flex ;
  width: 100%;
  margin: auto;
  padding: 1rem;
  text-align: left;
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
  margin: 1rem auto ;
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
  input, select, textarea {
    border: 1px solid ${({ theme }) => theme.primaryLightBorderInput};
    font-size: 1.2rem;
    padding: .5rem 1rem;
    margin-bottom: 0;
    width: ${props => props.width || '20rem'};

    color: ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.primaryLight};
    
    &:hover {
      border: 1px solid ${({ theme }) => theme.primaryDark};
    }
  }
  
`
export const CustomInputImage2 = styled.div`
  input {
    /* border: 1px solid ${({ theme }) => theme.primaryLightBorderInput}; */
    border: none;
    padding: .5rem 1rem;
    margin-bottom: 0;
    width: ${props => props.width || '20rem'};

    color: ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.primaryLight};
    :first-child {
        font-size: .7rem ;
      }
    &:hover {
      :first-child {
        color: ${({ theme }) => theme.linkHover};
      }
    }
 
    
  }
  
`
export const CustomInputImage = styled.label`
  .image-container {
    display: flex ;
    flex-direction: row ;
   font-size: .8rem;
   padding-top: .25rem ;

  }
   font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryDark};
  text-decoration: none;
  background-color: ${({ theme }) => theme.primaryLight};
  border: 2px solid ${({ theme }) => theme.primaryDark} ;
  cursor: pointer;
    &:before {
      content: "Seleccionar imagen" ;
    }
    input[type="file"] {
      display: none;
    }
    display: block ;
  width: 20rem;
  margin: 1rem auto ;
  max-height: 2rem ;
  margin-bottom: 2rem ;

  
  &:hover {
    color: ${({ theme }) => theme.primaryLight};
    /* background-color: ${({ theme }) => theme.primaryDark}; */
    background-color: var(--black-01);
    /* border: 2px solid ${({ theme }) => theme.primaryLight}; */
  }
  transition: all .3s ease, visibility 0s;
`

export const ErrorContainer = styled.div`
  height: 2rem ;
  width: ${props => props.width || '20rem'};
  margin: auto;
  font-size: .9rem;
  font-weight: 500 ;
  text-align: left;
  p {
    color: var(--red-01);
    padding-left: .6rem ;
    position: relative;
    top: -0.8rem;
    z-index: -1 ;
  }
`
