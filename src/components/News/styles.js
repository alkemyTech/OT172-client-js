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
