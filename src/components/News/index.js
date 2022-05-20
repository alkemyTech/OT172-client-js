import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchAllNews, reset } from 'store/slices/news'

import { Container } from './styles'
import Card from 'components/CardConstructor'
export default function News ({ qty = 'all', title = '' }) {
  const { news } = useSelector(state => state.news)
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (user) dispatch(fetchAllNews())
    if (!user) {
      dispatch(reset())
    }
  }, [dispatch, user])

  const navigate = useNavigate()

  const handleShowNew = (element) => {
    navigate(`/news/${element.id}`)
  }

  const totalShowNews = qty === 'all' ? news.length : qty

  return (
    <Container>
      <h1>{title}</h1>
      {news?.length > 0
        ? news.slice(0, totalShowNews).map((n, i) =>
          <div key={i} onClick={() => handleShowNew(n)}>

            <Card
              key={i}
              data={n}
              detail={false}
            />
          </div>)
        : <p>No hay noticias</p>}
    </Container>
  )
}
