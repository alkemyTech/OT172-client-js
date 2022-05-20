
import React from 'react'
import { Container } from './styles'

export default function Loader ({ size = '48px', line = '5px', color }) {
  return <Container width={size} height={size} line={line} color={color}><span className='spinner' /></Container>
}
