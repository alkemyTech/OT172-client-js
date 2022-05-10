import ActivitiesList from 'components/BackOffice/Activities/ActivitiesList'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllActivities } from 'store/slices/activities'

function ActivitiesScreen () {
  const { activities } = useSelector(state => state.activities)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllActivities())
  }, [dispatch])

  return (
    <ActivitiesList activities={activities}/>
  )
}

export default ActivitiesScreen