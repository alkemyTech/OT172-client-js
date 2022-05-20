import { mediaQueries } from 'config/responsive'
import styled from 'styled-components'

const { screenLittle, screenMiddle } = mediaQueries

export const Container = styled.div`
      margin-top: calc(var(--header-height) + 1rem) ;
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
/* background: rgb(223, 215, 215); */
background: var(--white-01) ;
margin: 1rem  auto;
padding: .3rem 2rem;
width: 90%;
box-shadow: 0 0 5px var(--black-02);
position: relative ;
z-index: -3;

${screenLittle} {
    width: 500px ;
  }
  ${screenMiddle} {
    width: 700px ;
  }
`

export const Faculties = styled.div`
      justify-content: center;
      align-items: center;
      padding: 1.2rem;
      z-index: -2;
`

export const Unit = styled.div`
      margin: 25px;
      width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
`

export const UnitImg = styled.img`
      filter: drop-shadow(0 10px 5px black);
      border-radius: 100px;
      width: 150px;
      height: 150px;
      margin-bottom: 10px;
      z-index: -1;
`
