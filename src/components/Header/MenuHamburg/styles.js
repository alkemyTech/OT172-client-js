import styled from 'styled-components'
import { mediaQueries } from 'config/responsive'
const { screenLittle } = mediaQueries

export const Container = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;
  color: blue ;
  
  ${screenLittle} {
  border: 1px solid blue;
  display: none ;
  }
`
