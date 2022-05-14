import styled from 'styled-components'
import { mediaQueries } from 'config/responsive'
const { screenLittle } = mediaQueries

export const Container = styled.header`
  display: flex ;
  position: fixed;
  background: ${({ theme }) => theme.primaryLightNavBar};
  width:100vw ;
  top:0;
  left:0;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  font-size: .8rem;

  ${screenLittle} {
  font-size: 1.1rem;
  }
`

export const Logo = styled.img`
    width: 5rem;
    height: auto;
    margin: .2rem;
    margin-right: 5rem;
    ${screenLittle} {
      margin-right: .2rem;
  }
`

export const navLinkStyles = ({ isActive }) => {
  const active = 'var(--blue-02)'
  const normal = 'var(--black-01)'
  return {
    fontWeight: isActive ? "bold" : "normal",
    color: isActive && active 
  };
};