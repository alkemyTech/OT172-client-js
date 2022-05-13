import styled from 'styled-components'

export const Container = styled.nav`
    display: flex;
    align-items: center;
    &>a:first-of-type {
      margin-left: 0;
    }
    &>a {
          font-size: .8rem;
          font-weight: 500;
          text-decoration: none;
          color: #000;
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
    color: isActive ? '#0000ff' : '#000'

  };
};

export const Logo = styled.img`
    width: 5rem;
    height: auto;
    margin: .2rem;
`