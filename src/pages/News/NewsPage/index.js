import News from 'components/News'
import React from 'react'
import { Container } from "./styles"

function NewsPage() {
  return (
    <Container>
      <News qty='all' title='Todas las Noticias' />
    </Container>
  )
}

export default NewsPage