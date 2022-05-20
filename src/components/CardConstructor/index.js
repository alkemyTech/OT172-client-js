
import React, { useState } from 'react'
import { ButtonsContainer, Container, Content, Data, Detail, Image, Titulo } from './styles'
import { FaTrash, FaEdit, FaEyeSlash, FaEye } from 'react-icons/fa'

export default function Card ({ data, detail = false, backOffice = false, handleEdit, handleDelete }) {
  const [seeContent, setSeeContent] = useState(false)

  return (
    <Container isDetail={detail} isBackOffice={backOffice}>
      <Data isDetail={detail} isBackOffice={backOffice}>
        {
          backOffice &&
            <ButtonsContainer>
              <button
                className='see'
                onClick={() => setSeeContent(!seeContent)}
                title='Editar! '
              >
                {seeContent ? <FaEyeSlash /> : <FaEye />}
              </button>
              <button
                className='edit'
                onClick={handleEdit}
                title='Editar! '
              >
                <FaEdit />
              </button>
              <button
                className='delete'
                onClick={handleDelete}
                title='Eliminar !'
              >
                <FaTrash />
              </button>

            </ButtonsContainer>
        }
        <Content>
          <Titulo>
            {data.name}
          </Titulo>
          {detail &&
            <Detail
              isBackOffice={backOffice}
              dangerouslySetInnerHTML={{ __html: data.content }}
              isSeeContent={seeContent}
            />}
        </Content>
      </Data>
      <Image image={data.image} isDetail={detail} />
    </Container>
  )
}
