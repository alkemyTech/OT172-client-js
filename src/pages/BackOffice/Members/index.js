import MembersList from 'components/BackOffice/Members/MembersList'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllMembers } from 'store/slices/members'

function MembersScreen () {
  const { members } = useSelector(state => state.members)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllMembers())
  }, [dispatch])

  return (
    <MembersList members={members} />
  )
}

export default MembersScreen
