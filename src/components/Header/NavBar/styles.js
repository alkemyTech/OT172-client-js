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
          font-size: 1rem;
          font-weight: 500;
          text-decoration: none;
          color: var(--white-01);
          cursor: pointer;    
          margin-left: .3rem;
        }
    &>a:hover {
      color: #0000ff;
    }
`
export const navLinkStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? '#0000ff' : 'var(--white-01)'
  };
};
