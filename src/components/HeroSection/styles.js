import styled from 'styled-components'
import img from './img.png'

export const HeroContainer = styled.div`
background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)),
url(${img});
height: 430px;
width: auto;
background-position: center;
background-size: fit;
`

export const HeroContent = styled.div`
height: 430px;
max-height: 100%;
width: 100vw;
padding: 0rem calc((100vw - 1300px) / 2)
`

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 933px;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  width: 100%;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`

export const HeroP = styled.p`
  font-size: clamp(1rem, 2.5vw, 2rem);
  margin-bottom: 2rem;
`

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`

export const Information= styled.div`
  display:flex;
  justify-contente:center;
 
  min-height: 460px;
  width: 100%;
  background: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.1));
  background-color: #100c24; //azul claro
  //background-color: #060511; //azul oscuro
`


export const InformationItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`

export const InformationH2 = styled.h2`
  font-size: clamp(1rem, 10vw, 2rem);
  margin-bottom: 1rem;
  box-shadow: 0px 5px #e9ba23;
  letter-spacing: 3px;
`

export const InformationP = styled.p`
  font-size: clamp(0.9rem, 2vw, 1.4rem);
  width:100%;
  margin-bottom: 2rem;
  max-width:60%;
  
  
`