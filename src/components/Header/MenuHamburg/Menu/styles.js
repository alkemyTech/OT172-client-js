import styled from 'styled-components'

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLightNavBar};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 80% ;
  z-index: 0;

  a,span {
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.25rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 1.2rem;
    text-align: center;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`

export const CardLoginOrRegister = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: .3rem;
  margin: 1rem 3rem;
  border-top: 3px solid var(--gray-02);
  padding-top: 2rem;
  a, span {
    padding: .2rem 0;
  }
`
