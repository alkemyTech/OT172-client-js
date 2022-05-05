import React from 'react'
import { Container } from './styles'
import News from 'components/News'
import Slider from 'components/Slider'

function Home () {
 
  return (
    <Container>
      <h1>Bienvenid@ a Somos Más</h1>
      <Slider />
      <News qty={4} title='Últimas Noticias'/>
    </Container>
  )
}

export default Home
