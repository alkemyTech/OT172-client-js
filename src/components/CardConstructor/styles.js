import styled from 'styled-components'
import { mediaQueries } from 'config/responsive'
const { screenLittle, screenBig } = mediaQueries

export const Container = styled.article`
  display: flex;
  width: auto;
  flex-direction: ${props => props.isDetail ? 'column' : 'row-reverse'};
  gap:.7rem;
  margin: 1rem;
  padding: 1rem;
  color: ${({ theme }) => theme.primaryDark};
`
export const Image = styled.div`
  min-height: 200px;
  height: ${props => props.isDetail ? '100%' : '200px'};
  width: ${props => props.isDetail ? '100%' : '50%'};
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: ${props => props.isDetail ? 'contain' : 'cover'};
  
  ${screenLittle} {
    height: ${props => props.isDetail ? '400px' : '200px'};
    width: ${props => props.isDetail ? '400px' : '200px'};
    
  }
  ${screenBig} {
    height: ${props => props.isDetail ? '100vh' : '200px'};
  }
`
export const Titulo = styled.h1`
  font-size: 1.2rem;
  margin: auto ;
`
export const Detail = styled.div`
  display: flex;
  font-size: 1.5rem;
  margin: auto ;
`

export const Content = styled.article`
  font-size: 1rem;
  align-self: center;
  padding: 1rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction:column;
  font-size: 1.5rem;
  margin: auto ;

`
export const ButtonDelete = styled.button`
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
  width: 140px;
  margin: .5rem auto ;
  padding: .6rem 1.2rem;
  
  &:hover {
    color: ${({ theme }) => theme.primaryLight};
    /* background-color: "${({ theme }) => theme.primaryDark};" */
    background-color: red;
    /* border: 2px solid ${({ theme }) => theme.primaryLight}; */
  }
  transition: all .3s ease, visibility 0s;

`
export const ButtonEdit = styled.button`
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
  width: 140px;
  margin: .5rem auto ;
  padding: .6rem 1.2rem;
  
  &:hover {
    color: ${({ theme }) => theme.primaryLight};
    /* background-color: "${({ theme }) => theme.primaryDark};" */
    background-color: gray;
    /* border: 2px solid ${({ theme }) => theme.primaryLight}; */
  }
  transition: all .3s ease, visibility 0s;

`