import styled from 'styled-components'
import { mediaQueries } from 'config/responsive'
const { screenLittle } = mediaQueries

export const Container = styled.section`
  margin: auto ;
  color: #000;
  &>h1 {
    text-align: center ;
  }

  ${screenLittle} {
    width: 500px ;
  }
`
export const ContainerClikeable = styled.div`
border: 1px solid transparent ;
  cursor: pointer;
  &:hover {
    border: 1px solid red ;
  }
`
