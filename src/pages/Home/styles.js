import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column ;
  margin: auto;
  margin-top: var(--header-height);
  &>h1 {
    text-align: center ;
  }
`
