import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategories } from '../../../store/slices/categories'


function Categories () {
  const { list: categories } = useSelector(state => state.categories)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllCategories())
  }, [dispatch])

  return (
      <>
    <div>
         Ruta Categories
      <h1>Redux Test: </h1>{categories.nameCategories?.map((c) => <h2>{c}</h2>)}
    </div></>
  )
}

export default Categories
