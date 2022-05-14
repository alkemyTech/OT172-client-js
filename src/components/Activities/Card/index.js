import React from 'react'
import { Container, Content, Detail, Image, Titulo } from './styles';

export default function Card({ data, detail = false }) {

  return (
    <Container isDetail={detail}>
      <Titulo>{data.name}</Titulo>
      <Image image={data.image} isDetail={detail}/>
      {detail &&
        <Detail>
          <Content dangerouslySetInnerHTML={{ __html: data.content }} />
        </Detail>
      }
    </Container>
  )
}
