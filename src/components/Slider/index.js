import React from 'react'
import { Slideshow, Slide, TextoSlide } from './Slideshow'
import { Container, Titulo } from './styles'
import { images } from './images'

const Slider = ({ title = '' }) => {
  console.log(images)
  return (
    <Container>
      <Titulo>{title}</Titulo>
      <Slideshow controles autoplay velocidad='1000' intervalo='2000'>
        {images.map((img, index) =>
          <Slide key={index}>
            <a href={img.link}>
              <img src={img.img} alt='' />
            </a>
            <TextoSlide>
              <p>{img.text}</p>
            </TextoSlide>
          </Slide>
        )}
      </Slideshow>
    </Container>
  )
}



export default Slider
