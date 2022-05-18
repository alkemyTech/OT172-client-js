import { CardBackOffice } from 'common/styles';
import React, { useEffect, useState } from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { alertToast, confirm } from 'services/alerts';
import { deleteCategories } from 'store/slices/categories';
import { Row } from './styles'


export default function CategoryCard({ category }) {
  const { isError, isSuccess, message } = useSelector(state => state.categories)

  const [deleteCategory, setDeleteCategory] = useState(false)
  const dispatch = useDispatch()

const navigate = useNavigate()

  const handleEdit = (id) => {
    navigate(`${id}`)
  }

  const handleDelete = () => {
    confirm(() => setDeleteCategory(true), 'Eliminar la Categoria ?')
  }

  useEffect(() => {
    if (deleteCategory) {
    dispatch(deleteCategories(category.id))
  }
  }, [deleteCategory])

  useEffect(() => {
    if (isError)  alertToast('error',message)
    if (deleteCategory && isSuccess) alertToast('success','Categoria Eliminada correctamente')
    setDeleteCategory(false)
  }, [isError, dispatch, deleteCategory])



  return (
    <CardBackOffice>
      <Row>
        <div className='name' >{category.name}</div>
        {/* <div className='description'>{category.description}</div> */}
        <div className='actions'>
          <button
            className='edit'
            onClick={() => handleEdit(category.id)}
          >
            <FaEdit />
          </button>
          <button 
            className='delete'
            onClick={()=>handleDelete()}
          >
            <FaTrash />
          </button>
        </div>
      </Row>


    </CardBackOffice>
  )
}
