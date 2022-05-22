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
background: var(--white-01) ;
margin: 1rem  auto;
padding: .3rem 2rem;
width: 90%;
box-shadow: 0 0 5px var(--black-02);


span>svg {
      color: var(--red-02);
}
p > span.group-name {
      font-weight: 700;
}

div.integrantes {
      display: flex;
      flex-direction: column;
}
${screenLittle} {
    width: 500px ;
  }
  ${screenMiddle} {
    width: 700px ;
  }
`
export const Integrante = styled.article`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 1rem;
      font-size: 1rem;
      span>svg {
            color: inherit;
            padding-right: .5rem;
      }
      a {
            cursor: pointer ;
            padding-right: 1rem;
      }
      a:hover>svg {
            cursor:pointer;
            color: var(--blue-01);

      }

      
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
