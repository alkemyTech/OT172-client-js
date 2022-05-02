import React from 'react'
import { Container } from './styles'
import News from 'components/News'



function Home () {
 

  return (
    <Container>
      <h1>Bienvenid@ a Somos Más</h1>
      <p>Aca va el Componente Slider</p>
      <News qty={4} title='Últimas Noticias'/>
    </Container>
  )
}

export default Home
