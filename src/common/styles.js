import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mediaQueries } from 'config/responsive'
const { screenLittle, screenMiddle } = mediaQueries

export const ContainerListBackOffice = styled.section`
  margin: auto ;
  color: ${({theme}) => theme.primaryDark};
  text-align: left ;
  &>h1 {
    text-align: center;
    font-size: 1.2rem ;
  }

  ${screenLittle} {
    width: 500px ;
  }
  ${screenMiddle} {
    width: 700px ;
  }
`

export const LinkStyled = styled(Link)`
 font-size: 1rem;
 padding-left: 2rem ;
 svg {
   color: var(--blue-02);
   margin-right: .3rem ;
 }
`

export const HeadTableBackOffice = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid #006600;
  font-weight: 700;
  margin: .2rem;
  margin-top: 1rem ;
  padding: .2rem ;
`

export const CardBackOffice = styled.article`
  display: flex;
  flex-direction: column;
  gap:.7rem;
  border: 2px solid #000066;
  margin: .2rem;
  padding: .2rem ;
`

export const RowBackOffice = styled.article`
  display: flex;
  justify-content: space-between;
  div.actions {
    display:flex;
    gap: .4rem ;
    width: 15%;
    justify-content:right;
    align-items: center ;
    button {
      cursor:pointer;
      background: transparent;
      border:none;
      svg {
        font-size: 1.4rem ;
      }
      &:hover {
        &>svg {
          color: var(--black-01);
        }
      }
      
    }
    button.edit {
      svg {
        color: var(--blue-01);
      }
      &:hover {
        &>svg {
          color: var(--blue-02);
        }
      }
      }
    button.delete {
      svg {
        color: var(--red-01);
      }
      &:hover {
        &>svg {
          color: var(--red-02);
        }
      }
      }
  }
`