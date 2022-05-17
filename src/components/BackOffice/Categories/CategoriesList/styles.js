import styled from 'styled-components'
import { HeadTableBackOffice } from 'common/styles'

export const Head = styled(HeadTableBackOffice)`
  div.name {
    display:flex;
    width: 45%;
    justify-content:left;
  }
  div.description {
    display:flex;
    width: 40%;
    justify-content:left;
  }
  div.actions {
    display:flex;
    gap: .4rem ;
    width: 15%;
    justify-content:right;
    align-items: center ;
  }
`