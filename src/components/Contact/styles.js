import styled from 'styled-components'
import { mediaQueries } from 'config/responsive'
const { screenLittle, screenMiddle } = mediaQueries

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap:10px;
    grid-auto-rows: minmax(400px,500px);
    max-width: 1000px;
    background-color:#DADADA;
    align-items: center;
    justify-items:center;
`

export const ContactText = styled.p`
    color:black;
    margin:0;
    padding: 25px;
    border-right: 1px solid #999999;
`
export const Container = styled.section`
  margin: auto ;
  color: #000;
  &>h1 {
    text-align: center ;
  }
  a {
    text-align: center ;
    font-size: 1rem;
    text-decoration: none;
    &:hover {
      color: #0000FF
    }
    svg {
      padding-left: 2rem ;
    }
  }

  ${screenLittle} {
    width: 500px ;
  }
  ${screenMiddle} {
    width: 700px ;
  }
`

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid #006600;
  font-weight: 700;
  margin: .2rem;
  padding: .2rem ;
  &>div.contactsList_name {
    display:flex;
    width: 45%;
    justify-content:left;
  }
  &>div.contactsList_email {
    display:flex;
    width: 45%;
    justify-content:left;
  }
  &>div.contactsList_phone {
    display:flex;
    width: 45%;
    justify-content:left;
  }
  
`




