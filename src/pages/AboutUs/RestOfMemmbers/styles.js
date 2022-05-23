import { mediaQueries } from 'config/responsive'
import styled from 'styled-components'
const { screenLittle, screenMiddle } = mediaQueries


// RestOfMemmbers Section
export const RestOfMemmbersSection = styled.section`
    color: var(--black-01);
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

${screenLittle} {
    width: 500px ;
  }
  ${screenMiddle} {
    width: 700px ;
  }
`

export const RestOfMemmbersSectionHeader = styled.div`
    display: flex;
    justify-content: center;
    &>h2{
        height: 80px;
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
        line-height: 3.62rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
`
export const RestOfMemmbersSectionContent = styled.div`
    margin-top: 6px;
    margin-bottom: 6px;
    position: relative;
    width: 200px ;
    ${screenLittle} {
        width: 300px ;
  }
`
