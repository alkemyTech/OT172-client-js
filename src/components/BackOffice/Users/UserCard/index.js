import { CardBackOffice } from 'common/styles';
import React, { useEffect, useState } from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { alertToast, confirm } from 'services/alerts';
import { deleteUsers } from 'store/slices/users';
import { Row } from './styles'


export default function UserCard({ user }) {
  const { isError, isSuccess, message } = useSelector(state => state.users)

  const [deleteUser, setDeleteUser] = useState(false)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleEdit = (id) => {
    navigate(`${id}`)
  }

  const handleDelete = () => {
    confirm(() => setDeleteUser(true), 'Eliminar la Usuario ?')
  }

  useEffect(() => {
    if (deleteUser) {
      dispatch(deleteUsers(user.id))
    }
  }, [deleteUser])

  useEffect(() => {
    if (isError) alertToast('error', message)
    if (deleteUser && isSuccess) alertToast('success', 'Usuario Eliminada correctamente')
    setDeleteUser(false)
  }, [isError, dispatch, deleteUser])


  return (
    <CardBackOffice>
      <Row>
        <div className='email' >{user.email}</div>
        <div className='names'>{user.firstName}{' '}{user.lastName}</div>
        <div className='actions'>
          <button
            className='edit'
            onClick={() => handleEdit(user.id)}
          >
            <FaEdit />
          </button>
          <button
          className='delete'
            onClick={() => handleDelete()}
          >
            <FaTrash />
          </button>
        </div>
      </Row>


    </CardBackOffice>
  )
}
