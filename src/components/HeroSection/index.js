import React from 'react'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './styles'

function HeroSection() {
    return (
        <HeroContainer>
        <HeroContent>
            <HeroItems>
                <HeroH1>SOMOS MAS ONG</HeroH1>
                <HeroP>Siempre a tu lado</HeroP>
                <HeroBtn>Más información</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
    )
}

export default HeroSection