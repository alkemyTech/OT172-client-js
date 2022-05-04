import React from 'react'
import UserCard from '../UserCard'
import { Container, Head } from './styles'

export default function UsersList({ users }) {
  return (
    <Container>
      <h1>Usuarios registrados en el sistema</h1>
      <Head>
        <div className='email' >Email</div>
        <div className='names'>Names</div>
        <div className='actions'>{users.length}</div>
      </Head>
      {users?.map((u, index) => <UserCard key={index} user={u} />)}
    </Container>
  )
}
