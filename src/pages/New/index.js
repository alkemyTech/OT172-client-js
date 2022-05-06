import CardNew from 'components/News/CardNew'
import Loader from 'components/utils/Loader'
import NotFound from 'components/utils/NotFound'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getService } from 'services/apiService'
import { ENDPOINT_NEWS } from 'services/settings'
import { fetchAllCategories } from 'store/slices/categories'
import { Container } from "./styles"

function New() {
  const params = useParams()
  const  [isLoading, setIsLoading] = useState(false)
  const  [data, setData] = useState({})
  
  const {categories} = useSelector(state => state.categories)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchAllCategories())
  }, [dispatch])

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      if (params.id) {
        const response = await getService(ENDPOINT_NEWS, params.id)
        setData(response.data)
        console.log(categories);
        setIsLoading(false)
      }
    })();
  }, [params.id, getService]);

  if (isLoading) return <Loader />

  return (
    <Container>
      <Link to={`/news`}>Volver a Novedades</Link>
      {data
       ? <CardNew 
            data={data}
            detail
          />
       : <NotFound resource='New' msg='Verifique la ruta que intenta acceder'/>
       }
    </Container>
  )
}

export default New