import React, { useEffect, useState } from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { alertToast, confirm } from 'services/alerts';
import { deleteActivities } from 'store/slices/activities';
import { Card, Row } from './styles'


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
    <Card>
      <Row>
        <div className='name' >{activity.name}</div>
        {/* <div className='description'>{activity.description}</div> */}
        <div className='actions'>
          <button
            onClick={() => handleEdit(activity.id)}
          >
            <FaEdit />
          </button>
          <button 
            onClick={()=>handleDelete()}
          >
            <FaTrash />
          </button>
        </div>
      </Row>


    </Card>
  )
}
