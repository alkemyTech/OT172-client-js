import styled from 'styled-components'
import { mediaQueries } from 'config/responsive'
const { screenLittle } = mediaQueries

export const Container = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  
  ${screenLittle} {
  display: none ;
  }
`
