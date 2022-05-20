import React from 'react'
import { Card, Category, Content, Image, Titulo } from './styles'

export default function CardNew ({ data, detail = false }) {
  return (
    <Card>
      <Titulo>{data.name}</Titulo>
      <Image src={data.image} alt={data.name} />
      {detail &&
        <>
          <Category>{data.categoryName}</Category>
          <Content>{data.content}</Content>
        </>}
    </Card>
  )


  

}
