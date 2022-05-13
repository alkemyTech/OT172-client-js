import React from 'react'
import { Navigate } from 'react-router-dom'

import Loader from 'components/utils/Loader'
import { useSelector } from 'react-redux'

export function PrivatedRoute ({ children }) {
  const { user, isLoading } = useSelector(state => state.auth)
console.log(user);
  if (isLoading) return <Loader />

  if (user.roleId !== 1) return <Navigate to='/home' />

  return <>{children}</>
}
