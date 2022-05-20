
import { ContainerListBackOffice, LinkButtonStyled } from 'common/styles'
import React from 'react'
import NewsCard from '../NewsCard'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function NewsListBackOffice ({ news }) {
  const navigate = useNavigate()

  return (
    <ContainerListBackOffice>
      <h1>News ({news.length})</h1>
      <LinkButtonStyled onClick={() => navigate('new')}><FaPlus /> Agregar</LinkButtonStyled>
      {news?.map((n, index) => <NewsCard key={index} myNew={n} />)}
    </ContainerListBackOffice>
  )
}
