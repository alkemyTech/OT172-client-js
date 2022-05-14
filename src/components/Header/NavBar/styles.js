import styled from 'styled-components'
import { mediaQueries } from 'config/responsive'
const { screenLittle } = mediaQueries

export const Container = styled.nav`
    display: none;
    align-items: center;
  
    ${screenLittle} {
      display: flex ;
    }

    &>a:first-of-type {
      margin-left: 0;
    }
    &>a {
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;    
          margin-left: .3rem;
        }
    &>a:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
`
