import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLightNavBar};
  /* transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'}; */
  transform: ${({ open }) => open ? 'translateX(calc(-1*(80% + 70vw)))' : 'translateX(0)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: calc(-1*(80% + 70vw));
  transition: transform 0.3s ease-in-out;
  width: 80% ;
  z-index: 0;

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    /* color: ${({ theme }) => theme.primaryDark}; */
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 1.5rem;
    text-align: center;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
