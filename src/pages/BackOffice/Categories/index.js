import CategoriesList from 'components/BackOffice/Categories/CategoriesList'
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
    <CategoriesList categories={categories}/>
  )
}

export default Categories