import styled from 'styled-components'

export const Row = styled.article`
  display: flex;
  justify-content: space-between;
  &>div.email {
    display:flex;
    width: 45%;
    justify-content:left;
  }
  &>div.names {
    display:flex;
    width: 40%;
    justify-content:left;
  }
  &>div.actions {
    display:flex;
    gap: .4rem ;
    width: 15%;
    justify-content:right;
    align-items: center ;
    &>button {
      cursor:pointer;
      background: transparent;
      border:none;
      &:hover {
        &>svg {
          color: #0000bb;
        }
      }
    }
  }

`