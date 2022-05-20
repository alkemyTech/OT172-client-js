import React from 'react'
import styled from 'styled-components'

export default function Page404 () {
  return (
    <Container>
      <img src='/images/404.png' alt='No encontrado' />
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  width: 100vw;
  padding: 3rem;
`
