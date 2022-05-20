import styled from 'styled-components'

const center = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled(center)`
position:fixed;
bottom:0;
width:100%;
height:100px;   
background: ${({ theme }) => theme.primaryLightNavBar};
`

export const Grid = styled.div`

  width: 60%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 70% 30%;
`

export const SocialMedia = styled(center)`
  grid-column: 1/5;
  grid-row: 1/2;
  display: grid;
  grid-template-columns: 50% repeat(3, 15%);
`

export const Organization = styled(center)`
  grid-column: 1/2;
  flex-direction: column;
`

export const Name = styled.h2``

export const Href = styled.a`
  
  display: flex;
  justify-content: center;
`

export const Instagram = styled(center)`
width: 50px;
  grid-column: 2/3;
`

export const Facebook = styled(center)`
width: 70px;
  grid-column: 3/4;
`

export const LinkedIn = styled(center)`
width: 70px;
  grid-column: 4/4;
`

export const OrganizationData = styled.div`
  grid-column: 1/5;
  grid-row: 2/2;
  flex-direction: column;
  display: grid;
  grid-template-rows: repeat(2, 50%);
`

export const Separator = styled.hr`
  grid-row: 1/2;
  width: 100%;
`

export const Adress = styled(center)`
  grid-column: 1/2;
`

export const Phone = styled(center)`
  grid-column: 2/3;
`
