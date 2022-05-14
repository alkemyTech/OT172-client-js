import styled from 'styled-components'
import { mediaQueries } from 'config/responsive'
const { screenLittle } = mediaQueries

export const Container = styled.section`
  margin: auto ;
  margin-top: var(--header-height);
  &>h1 {
    text-align: center ;
  }

  ${screenLittle} {
    width: 500px;
  }
`
export const ContainerClikeable = styled.div`
  border-bottom: 3px solid ${({ theme }) => theme.linkBorderColor};

  cursor: pointer;
  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.linkBorderColorHover};
  }
`
