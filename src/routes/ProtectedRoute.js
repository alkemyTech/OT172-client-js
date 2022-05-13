import React from 'react'
import { Navigate } from 'react-router-dom'

import Loader from 'components/utils/Loader'
import { useSelector } from 'react-redux'

export function ProtectedRoute ({ children }) {
  const { user, isLoading } = useSelector(state => state.auth)

  if (isLoading) return <Loader />

  if (!user) return <Navigate to='/home' />

  return <>{children}</>
}
