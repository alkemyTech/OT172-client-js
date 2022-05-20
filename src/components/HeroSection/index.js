import React from 'react'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP } from './styles'
import { useNavigate } from 'react-router-dom'
import { Button } from 'components/Forms/styles'

function HeroSection () {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/aboutus')
  }
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>SOMOS MÁS </HeroH1>
          <HeroP>Diseñamos e implementamos procesos innovadores de construcción colectiva</HeroP>
          {/* <HeroBtn onClick={handleClick}>Más información</HeroBtn> */}
          <Button onClick={handleClick}>Más información</Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
