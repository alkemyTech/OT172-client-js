import React from 'react'
import MemberCard from '../MemberCard'
import { ButtonStyled, Head } from './styles'
import { FaPlus } from 'react-icons/fa'
import { ContainerListBackOffice } from 'common/styles'
import { useNavigate } from 'react-router-dom'

export default function MembersList({ members }) {
  const navigate = useNavigate()
  return (
    <ContainerListBackOffice>
      <h1>Miembros ( {members.length} )</h1>
      <Head>
        <div className='name'>Nombre</div>
        <div className='actions' >
          <ButtonStyled onClick={() => navigate('new')}><FaPlus /> Agregar</ButtonStyled>
        </div>
      </Head>
      {members?.map((c, index) => <MemberCard key={index} member={c} />)}
    </ContainerListBackOffice>
  )
}
