import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { fetchAllNews } from "store/slices/news";
import CardNew from "./CardNew";
import { Container } from "./styles";

export default function News() {
  const { list: news } = useSelector(state => state.news)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchAllNews())
  }, [dispatch])

  return (
    <Container>
      <h1>Últimas Noticias</h1>
      {news.length > 0 
        ? news.slice(0,4).map( (n, i) => <CardNew key={i} element={n} /> )
        : <p>No hay noticias</p>
      }
    </Container>
  )
}
