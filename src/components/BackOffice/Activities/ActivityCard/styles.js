import { RowBackOffice } from 'common/styles'
import styled from 'styled-components'

export const Row = styled(RowBackOffice)`
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
`