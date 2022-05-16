
import React from 'react'
import { ButtonDelete, ButtonEdit, ButtonsContainer, Container, Content, Detail, Image, Titulo } from './styles';

export default function Card({ data, detail = false, backOffice=false, handleEdit, handleDelete }) {
    
  
    return (
    <Container isDetail={detail}>
        {
          backOffice &&
          <ButtonsContainer>
            <ButtonEdit onClick={handleEdit}>Editar</ButtonEdit>
            <ButtonDelete onClick={handleDelete}>Eliminar </ButtonDelete>
          </ButtonsContainer>
      }
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

