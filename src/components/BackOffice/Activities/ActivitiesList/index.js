import React, { useEffect } from 'react'
import ActivityCard from '../ActivityCard'
import { FaPlus } from 'react-icons/fa'
import { CardContainer, ContainerListBackOffice, LinkButtonStyled } from 'common/styles'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllActivities, reset } from 'store/slices/activities'

export default function ActivitiesList () {
  const { activities } = useSelector(state => state.activities)
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllActivities())
    if (!user) {
      dispatch(reset())
    }
  }, [dispatch, user])

  const navigate = useNavigate()


  const totalShowActivities = activities.length

  return (
    <CardContainer>
      <h1>Actividades ( {activities.length} )</h1>
      <LinkButtonStyled onClick={() => navigate('new')}><FaPlus /> Agregar</LinkButtonStyled>

      {activities?.length > 0
        ? activities.slice(0, totalShowActivities).map((n, i) =>
        <div key={i}>
          <ActivityCard
            activity={n}
        />
        </div>)
        : <p>No hay actividades</p>}
    </CardContainer>
  )
}
