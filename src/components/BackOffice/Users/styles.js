import styled from 'styled-components'
import { mediaQueries } from 'config/responsive'
const { screenLittle, screenMiddle } = mediaQueries

export const Container = styled.section`
  margin: auto ;
  color: #000;
  &>h1 {
    text-align: center ;
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
  }
`