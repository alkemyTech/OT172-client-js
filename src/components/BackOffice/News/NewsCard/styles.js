import styled from 'styled-components'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap:.7rem;
  border: 2px solid #000066;
  margin: .2rem;
  padding: .2rem ;
`

export const Row = styled.article`
  display: flex;
  justify-content: space-between;
  &>div.name {
    display:flex;
    width: 45%;
    justify-content:left;
  }
  &>div.description {
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
