import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { fetchAllNews, reset } from "store/slices/news";
import CardNew from "./CardNew";
import { Container } from "./styles";

export default function News({qty = 'all', title = ''}) {
  const { news } = useSelector(state => state.news)
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchAllNews())
    if (!user) {
    dispatch(reset())
  }

  }, [dispatch, user])

  const totalShowNews = qty === 'all' ? news.length : qty

  return (
    <Container>
      <h1>{title}</h1>
      {news?.length > 0 
        ? news.slice(0,totalShowNews).map( (n, i) => <CardNew key={i} element={n} /> )
        : <p>No hay noticias</p>
      }
    </Container>
  )
}
