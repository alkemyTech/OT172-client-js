import { StyledMenuTemplate } from 'components/Header/utils/styles'
import styled from 'styled-components'

export const StyledMenu = styled(StyledMenuTemplate)`
  transform: ${({ open }) => open ? 'translateX(calc(-1*((80vw - 1rem) + 80vw)))' : 'translateX(0)'};
  right: calc(-1*(80% + 80vw));
`
