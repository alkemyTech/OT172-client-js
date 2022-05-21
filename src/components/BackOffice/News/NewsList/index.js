
import { CardContainer, ContainerClikeable, ContainerListBackOffice, LinkButtonStyled } from 'common/styles'
import React, { useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllNews, reset } from 'store/slices/news'
import Card from 'components/CardConstructor'
import NewsCard from '../NewsCard'

export default function NewsListBackOffice () {
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

  const totalShowNews = news.length


  return (
    <CardContainer>
      <h1>News {news.length}</h1>{/*CREAR NUEVO ESTILO PARA ESTO*/}
      <LinkButtonStyled onClick={() => navigate('new')}><FaPlus /> Agregar</LinkButtonStyled>
      {news?.length > 0
        ? news.slice(0, totalShowNews).map((n, i) =>
          <div key={i}>
            <NewsCard
              myNew={n}
            />
          </div>)
        : <p>No hay noticias</p>}
    </CardContainer>
  )
}
