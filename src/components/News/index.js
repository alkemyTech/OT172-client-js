import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchAllNews, reset } from 'store/slices/news'

import Card from 'components/CardConstructor'
import { CardContainer, ContainerClikeable } from 'common/styles'


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
    <CardContainer>
      <h1>{title}</h1>{/*CREAR NUEVO ESTILO PARA ESTO*/}
      {news?.length > 0
        ? news.slice(0, totalShowNews).map((n, i) =>
          <ContainerClikeable key={i} onClick={() => handleShowNew(n)}>
            <Card
              key={i}
              data={n}
              detail={false}
            />
          </ContainerClikeable>)
        : <p>No hay noticias</p>}
    </CardContainer>
  )
}
