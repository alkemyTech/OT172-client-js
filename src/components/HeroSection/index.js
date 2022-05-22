import React, { useEffect, useState } from 'react'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroInformation } from './styles'
import { useNavigate } from 'react-router-dom'
import { Button } from 'components/Forms/styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrganizationDataPublic } from 'store/slices/organization'

function HeroSection () {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/aboutus')
  }
  const {list } = useSelector(state => state.organization)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOrganizationDataPublic(1))
  }, [dispatch])

  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>{list.name} </HeroH1>
          <HeroP>Diseñamos e implementamos procesos innovadores de construcción colectiva</HeroP>
          {/* <HeroBtn onClick={handleClick}>Más información</HeroBtn> */}
          <Button onClick={handleClick}>Más información</Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
