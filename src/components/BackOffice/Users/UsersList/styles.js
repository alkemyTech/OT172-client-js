import { HeadTableBackOffice } from 'common/styles'
import styled from 'styled-components'

export const Head = styled(HeadTableBackOffice)`
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