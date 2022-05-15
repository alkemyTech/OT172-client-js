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
    font-size: 1.5rem ;
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