import styled from 'styled-components'
import { mediaQueries } from 'config/responsive'
const { screenLittle, screenBig } = mediaQueries

export const Container = styled.article`
  display: flex;
  
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
    background-size: cover;
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