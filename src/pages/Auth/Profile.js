import React, { useEffect } from 'react'
import { UserForm } from 'pages/BackOffice/Users/UserForm'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Profile () {
  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    if (parseInt(params.id) !== user.id) {
      params.id = user.id
      navigate(`/profile/${params.id}`)
    }
  }, [params.id, navigate, user.id])

  return (
    <UserForm profile />
  )
}

export default Profile
