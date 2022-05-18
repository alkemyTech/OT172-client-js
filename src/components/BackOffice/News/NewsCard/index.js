import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { alertToast, confirm } from 'services/alerts';
import { deleteNews } from 'store/slices/news';
import Card from 'components/CardConstructor';



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
      <Card
        data={myNew}
        backOffice={true}
        detail={true}
        handleEdit={() => handleEdit(myNew.id)}
        handleDelete={()=>handleDelete()}
      />
      
    )
}