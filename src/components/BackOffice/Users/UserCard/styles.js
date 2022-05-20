import { RowBackOffice } from 'common/styles'
import styled from 'styled-components'

export const Row = styled(RowBackOffice)`
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
`
