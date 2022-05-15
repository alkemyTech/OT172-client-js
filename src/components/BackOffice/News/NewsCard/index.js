import React, { useEffect, useState } from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { alertToast, confirm } from 'services/alerts';
import { deleteNews } from 'store/slices/news';
import { Card, Row } from './styles';



export default function NewsCard({myNew}){
    const { isError, isSuccess, message } = useSelector(state => state.news)
    const [deleteNew, setDeleteNew] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleEdit = (id) => {
        navigate(`${id}`)
    }

    const handleDelete = () => {
        confirm(() => setDeleteNew(true), 'Eliminar la novedad?')
    }

    useEffect(() => {
      if (deleteNew) {
        dispatch(deleteNews(myNew.id))
      }
      }, [deleteNew,myNew.id,dispatch])

    useEffect(() => {
    if (isError)  alertToast('error',message)
    if (deleteNew && isSuccess) alertToast('success','Novedad Eliminada correctamente')
    setDeleteNew(false)
    }, [isError, dispatch, deleteNew])
    
    return(
      <Card>
        <Row>
        <div className='name' >{myNew.name}</div>
        <div className='actions'>
          <button
            onClick={() => handleEdit(myNew.id)}
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