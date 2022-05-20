import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers } from 'store/slices/users'
import UsersList from 'components/BackOffice/Users/UsersList'

function Users () {
  const { users } = useSelector(state => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])
  return (
    <>
      <UsersList users={users} />
    </>
  )
}

export default Users
