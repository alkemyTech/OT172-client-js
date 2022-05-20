import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from 'config/responsive'
const { screenLittle, screenMiddle } = mediaQueries

export default function NotFound ({ resource = 'resource', msg = null }) {
  return (
    <Container>
      <h1>Sorry, {resource} NotFound</h1>
      <span>{msg}</span>
    </Container>
  )
}

const Container = styled.section`
  margin: 3rem auto ;
  padding: 2rem;
  text-align: center;
  border: 4px solid #bb0000;
  background-color: #D00047;
  &>h1 {
    font-size: 2rem;
    color: #000;
    margin-bottom: .8rem;
  }
  &>span {
    font-size: 1.3rem;
  }

  ${screenLittle} {
    width: 500px ;
  }
  ${screenMiddle} {
    width: 700px ;
  }
`
