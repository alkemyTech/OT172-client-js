import React from 'react'
import MemberCard from '../MemberCard'
import { Head } from './styles'
import { FaPlus } from 'react-icons/fa'
import { ContainerListBackOffice, LinkStyled } from 'common/styles'

export default function MembersList ({ members }) {
  return (
    <ContainerListBackOffice>
      <h1>Miembros ( {members.length} )</h1>
      <LinkStyled to='new'><FaPlus /> Agregar Nuevo</LinkStyled>

      <Head>
        <div className='name'>Nombre</div>
        <div className='actions' />
      </Head>
      {members?.map((c, index) => <MemberCard key={index} member={c} />)}
    </ContainerListBackOffice>
  )
}
