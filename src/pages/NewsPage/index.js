import News from 'components/News'
import { NewsForm } from 'components/News/Form'
import React from 'react'
import { Container } from "./styles"

function NewsPage() {
  return (
    <Container>
      <News qty='all' title='Todas las Noticias' />
      <NewsForm />
    </Container>
  )
}

export default NewsPage