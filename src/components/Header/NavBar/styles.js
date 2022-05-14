import styled from 'styled-components'
import { mediaQueries } from 'config/responsive'
const { screenLittle } = mediaQueries

export const Container = styled.nav`
    display: none;
    align-items: center;
    padding-right: 2rem;
  
    ${screenLittle} {
      display: flex ;
    }

    &>a:first-of-type {
      margin-left: 0;
    }
    &>a {
      text-transform: uppercase;
      font-weight: 500;
      text-decoration: none;
      cursor: pointer;    
      margin-left: .5rem;
        }
    &>a:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
`
