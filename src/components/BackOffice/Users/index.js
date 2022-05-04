import React from 'react'
import UserCard from '../User'

export default function UsersList({ users }) {
  return (
    <>
      <h1>Usuarios registrados en el sistema</h1>
      {users?.map((u, index) => <UserCard key={index} user={u} />)}
    </>
  )
}
