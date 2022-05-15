import { ContainerListBackOffice } from 'common/styles'
import React from 'react'
import UserCard from '../UserCard'
import { Head } from './styles'

export default function UsersList({ users }) {
  return (
    <ContainerListBackOffice>
      <h1>Usuarios ( {users.length} )</h1>
      <Head>
        <div className='email' >Email</div>
        <div className='names'>Names</div>
        <div className='actions'></div>
      </Head>
      {users?.map((u, index) => <UserCard key={index} user={u} />)}
    </ContainerListBackOffice>
  )
}
