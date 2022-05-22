import { mediaQueries } from 'config/responsive'
import styled from 'styled-components'
import { Wrapper } from '../styles'
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
    margin-top: 64px;
    margin-bottom: 64px;
    border-bottom: 1px solid #fff;
`
export const RestOfMemmbersItem = styled.div`
    &>div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 24px 0;
        cursor: pointer;
        /* font-size: 1.5rem;
        line-height: 1.75rem;
        font-weight: 700; */
        &>span {
            padding-right: 64px;
            font-size: 1.5rem;
            line-height: 1.75rem;
            font-weight: 700;
        }
        &>svg {
            flex-shrink: 0;
            width: 20px;
            height: 20px;
        }
    }
    &>div:last-of-type{
        line-height: 1.5rem;
        padding: 24px 0;
    }
`
export const RestOfMemmbersSectionFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
