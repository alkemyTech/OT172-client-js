import Loader from 'components/utils/Loader'
import NotFound from 'components/utils/NotFound'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getService } from 'services/apiService'
import { ENDPOINT_ACTIVITIES } from 'services/settings'
import { Container } from "./styles"
import { TiArrowBack } from "react-icons/ti";
import Card from 'components/Activities/Card'

function Activity() {
  const params = useParams()
  const  [isLoading, setIsLoading] = useState(false)
  const  [data, setData] = useState({})
  

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      if (params.id) {
        const response = await getService(ENDPOINT_ACTIVITIES, params.id)
        if (response.data?.id) {
          setData(response.data)
        } else {
          setData()
        }
        setIsLoading(false)
      }
    })();
  }, [params.id]);

  if (isLoading) return <Loader />

  return (
    <Container>
      <Link to={`/activities`}><TiArrowBack /> Volver a Actividades</Link>
      {data
       ? <Card 
            data={data}
            detail
          />
       : <NotFound resource='Activities' msg='Verifique la ruta que intenta acceder'/>
       }
    </Container>
  )
}

export default Activity