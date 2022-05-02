import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers } from 'store/slices/users'


function Users () {
  const { list: users } = useSelector(state => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])
  return (
      <>
    <div>   
      <h1>Usuarios registrados en el sistema</h1>
      {users?.map((u,index) => <h2 key={index}>{u.email}</h2>)}
    </div></>
  )
}

export default Users