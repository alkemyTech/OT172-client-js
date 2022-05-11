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
  &>div.contactCard_name {
    display:flex;
    width: 40%;
    justify-content:left;
  }
  &>div.contactCard_email {
    display:flex;
    width: 40%;
    justify-content:left;
  }
  &>div.contactCard_phone {
    display:flex;
    width: 40%;
    justify-content:left;
  }
  }

`