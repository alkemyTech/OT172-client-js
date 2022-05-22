
import React, { useState } from 'react'
import { ButtonsContainer, Container, Content, Data, Detail, Image, Titulo, EditContainer } from './styles'
import { FaTrash, FaEdit, FaEyeSlash, FaEye } from 'react-icons/fa'
import { CardH1 } from 'common/styles'
export default function Card({ data, detail = false, backOffice = false, handleEdit, handleDelete }) {
  const [seeContent, setSeeContent] = useState(false)

  return (
    <Container isDetail={detail} isBackOffice={backOffice}>
      <EditContainer isBackOffice={backOffice}>
        <Data isDetail={detail} isBackOffice={backOffice}>
          <Content>
            <CardH1>
              {data.name}
            </CardH1>
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
          </Content>
        </Data>
        <Image image={data.image} isDetail={detail} />

        {(detail && !backOffice) &&
          <Detail
            isBackOffice={backOffice}
            dangerouslySetInnerHTML={{ __html: data.content }}
            isSeeContent={seeContent}
          />
        }
      </EditContainer>
      {seeContent && //Tirar esto abajo de image 
        <Detail
          isBackOffice={backOffice}
          dangerouslySetInnerHTML={{ __html: data.content }}
          isSeeContent={seeContent}
        />}
    </Container>
  )
}
