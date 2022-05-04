import React from 'react'

export default function UserCard({user}) {
  return (
    <div>
      <div>{user.email}</div>
      <div>{user.firstName}</div>
      <div>{user.lastName}</div>
      <div>Edit - Delete</div>

    </div>
  )
}
