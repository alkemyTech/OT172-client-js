import styled from 'styled-components'
import { mediaQueries } from 'config/responsive'
const { screenLittle } = mediaQueries

export const Container = styled.header`
  /* display: grid;
  grid-template-rows: 2rem;
  grid-template-columns: 6rem 1fr 1fr ; */
  display: flex ;
  justify-content: space-between;
  align-items: center;
  height: 3rem;

  ${screenLittle} {
  border: 1px solid blue;
  }
`

export const Logo = styled.img`
    width: 5rem;
    height: auto;
    margin: .2rem;
`