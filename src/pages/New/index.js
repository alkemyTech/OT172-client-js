import CardNew from 'components/News/CardNew'
import Loader from 'components/utils/Loader'
import NotFound from 'components/utils/NotFound'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchAllNews, reset } from 'store/slices/news'
import { Container } from "./styles"

function New() {
  const params = useParams()
  const  [newtoShow, setNewToShow] = useState({})
  const { user } = useSelector(state => state.auth)
  const { news, isLoading } = useSelector((state) => state.news)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchAllNews())

    if (!user) {
      dispatch(reset())
    }
  }, [dispatch, user])

  useEffect(() => {
    const newFounded = news.filter(e => e.id === parseInt(params.id))
    setNewToShow(newFounded[0])
  }, [params.id, news])

  if (isLoading) return <Loader />

  return (
    <Container>
      <Link to={`/news`}>Volver</Link>
      {newtoShow
       ? <CardNew 
            element={newtoShow} 
          />
       : <NotFound resource='New' msg='Verifique la ruta que intenta acceder'/>
       }
    </Container>
  )
}

export default New