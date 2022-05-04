import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { deleteUser } from 'store/slices/users';
import { Card, Row } from './styles'


export default function UserCard({user}) {
  const dispatch = useDispatch()
  return (
    <Card>
      <Row>
        <div className='email' >{user.email}</div>
        <div className='names'>{user.firstName}{' '}{user.lastName}</div>
        <div className='actions'><FaEdit /><button onClick={(e) => {
                dispatch(deleteUser(user.id));
              }}><FaTrash /></button></div>
      </Row>
      

    </Card>
  )
}
