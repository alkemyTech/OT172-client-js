import CardNew from 'components/News/CardNew'
import Loader from 'components/utils/Loader'
import NotFound from 'components/utils/NotFound'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getService } from 'services/apiService'
import { ENDPOINT_NEWS } from 'services/settings'
import { Container } from './styles'
import { TiArrowBack } from 'react-icons/ti'

function New () {
  const params = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      if (params.id) {
        const response = await getService(ENDPOINT_NEWS, params.id)
        if (response.data?.id) {
          setData(response.data)
        } else {
          setData()
        }
        setIsLoading(false)
      }
    })()
  }, [params.id, getService])

  if (isLoading) return <Loader />

  return (
    <Container>
      <Link to='/news'><TiArrowBack /> Volver a Novedades</Link>
      {data
        ? <CardNew
            data={data}
            detail
          />
        : <NotFound resource='New' msg='Verifique la ruta que intenta acceder' />}
    </Container>
  )
}

export default New
