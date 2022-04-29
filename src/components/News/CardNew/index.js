import React from 'react'
import { Card } from './styles';

export default function CardNew( {element} ) {
  return (
    <Card>
      {element.name}
      {/* <img src={element.image} alt={element.name} /> */}
    </Card>
  )
}
