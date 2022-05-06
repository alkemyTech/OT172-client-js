import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategories } from 'store/slices/categories'


function Categories () {
  const { categories } = useSelector(state => state.categories)
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(fetchAllCategories())
  }, [dispatch])

  return (
      <>
    <div>
         Ruta Categories
      <h1>Redux Test: </h1>{categories.map((c) => <h2>{c.name}</h2>)}
    </div></>
  )
}

export default Categories