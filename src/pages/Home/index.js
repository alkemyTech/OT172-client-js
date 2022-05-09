import React from 'react'
import { Container } from './styles'
import News from 'components/News'
import Slider from 'components/Slider'
import HeroSection from 'components/HeroSection'

function Home () {
 
  return (
    <Container>
      <HeroSection/>
      <Slider />
      <News qty={4} title='Últimas Noticias'/>
    </Container>
  )
}

export default Home
