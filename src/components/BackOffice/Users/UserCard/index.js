import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { confirm } from 'services/alerts';
import { deleteUser } from 'store/slices/users';
import { Card, Row } from './styles'


export default function UserCard({ user }) {
  const dispatch = useDispatch()

  const handleEdit = (id) => {
    console.log(`el user id es: ${id}`);
  }
  return (
    <Card>
      <Row>
        <div className='email' >{user.email}</div>
        <div className='names'>{user.firstName}{' '}{user.lastName}</div>
        <div className='actions'>
          <button
            onClick={() => handleEdit(user.id)}
          >
            <FaEdit />
          </button>
          <button 
            onClick={() => confirm(() => dispatch(deleteUser(user.id)), `Eliminar el usuario con email: ${user.email} ?`)}
          >
            <FaTrash />
          </button>
        </div>
      </Row>


    </Card>
  )
}
