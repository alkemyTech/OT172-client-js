
import { CardBackOffice } from 'common/styles';
import Card from 'components/CardConstructor';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { alertToast, confirm } from 'services/alerts';
import { deleteActivities } from 'store/slices/activities';




export default function ActivityCard({ activity }) {
  const { isError, isSuccess, message } = useSelector(state => state.activities)

  const [deleteActivity, setDeleteActivity] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleEdit = (id) => {
    navigate(`${id}`)
  }

  const handleDelete = () => {
    confirm(() => setDeleteActivity(true), 'Eliminar la Actividad ?')
  }

  useEffect(() => {
    if (deleteActivity) {
    dispatch(deleteActivities(activity.id))
  }
  }, [deleteActivity,activity.id,dispatch])

  useEffect(() => {
    if (isError)  alertToast('error',message)
    if (deleteActivity && isSuccess) alertToast('success','Actividad Eliminada correctamente')
    setDeleteActivity(false)
  }, [isError, dispatch, deleteActivity])

  return (
    <Card 
      data={activity}
      detail={true}
      backOffice={true}
      handleEdit={() => handleEdit(activity.id)}
      handleDelete={()=>handleDelete()}
      />
  )
}
