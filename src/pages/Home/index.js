import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategories } from '../../store/slices/categories'
import { CreateUserForm } from '../../components/CreateUser'
import OrganizationData from 'components/OrganizationData'
import { Container } from './styles'

function Home () {
  const { list: categories } = useSelector(state => state.categories)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllCategories())
  }, [dispatch])

  return (
    <Container>
      Ruta Home
      <div>
        <h1>Redux Test: </h1>
        {categories.nameCategories?.map(c => (
          <h2>{c}</h2>
        ))}
      </div>
      <CreateUserForm />
    </Container>
  )
}

export default Home
