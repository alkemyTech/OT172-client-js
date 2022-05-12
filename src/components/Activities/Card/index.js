import React from 'react'
import { Container, Content, Image, Titulo } from './styles';

export default function Card({ data, detail = false }) {
  
  return (
    <Container>
      <Titulo>{data.name}</Titulo>
      <Image src={data.image} alt={data.name} />
      {detail &&
        <>
          {/* <Content>{data.content}</Content> */}
          <Content dangerouslySetInnerHTML={{ __html: data.content }} />
        </>
      }
    </Container>
  )
}
