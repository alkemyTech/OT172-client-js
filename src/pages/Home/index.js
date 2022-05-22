import React from 'react'
import { Container } from './styles'
import News from 'components/News'
import Slider from 'components/Slider'
import HeroSection from 'components/HeroSection'
import { Information, InformationH2, InformationItems, InformationP } from 'components/HeroSection/styles'

function Home () {
  return (
    <Container>
      <HeroSection />
      <Information>
        <InformationItems>
          <InformationH2>Sobre nosotros</InformationH2>
          <InformationP>Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social. Uniendo las manos de todas las familias, las que viven en el barrio y las que viven fuera de él, es que podemos pensar, crear, y garantizar estos procesos. Somos una asociación civil sin fines de lucro que se creó en 1997 con la intención de dar alimento a las familias del barrio. Con el tiempo fuimos involucrándonos con la comunidad y agrandando y mejorando nuestra capacidad de trabajo. Hot somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: Educación, deportes, primera infancia, salud, alimentación y trabajo social.</InformationP>
        </InformationItems>
      </Information>
      <Slider />
      <News qty={4} title='Últimas Noticias' />
    </Container>
  )
}

export default Home
