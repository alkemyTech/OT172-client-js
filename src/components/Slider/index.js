import React, { useEffect } from 'react'
import { Slideshow, Slide, TextoSlide } from './Slideshow'
import { Container, Titulo } from './styles'
import { images } from './images'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllActivities } from 'store/slices/activities'

const Slider = ({ title = '' }) => {
  //console.log(images)
  const { activities } = useSelector(state => state.activities)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllActivities())
  }, [dispatch])

  return (
    <Container>
      <Titulo>ACTIVIDADES</Titulo>
      <Slideshow controles autoplay velocidad='1000' intervalo='3000'>
        {activities.map((act, index) =>
          <Slide key={index}>
        
              <img src={act.image} alt='' />
         
            <TextoSlide>
              <p>{act.name}</p>
            </TextoSlide>
          </Slide>
        )}
      </Slideshow>
    </Container>
  )
}



export default Slider
