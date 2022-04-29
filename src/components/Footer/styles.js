import styled from 'styled-components'

const center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled(center)`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 25vh;
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
  grid-template-columns: 40% repeat(3, 20%);
`

export const Organization = styled(center)`
  grid-column: 1/2;
  flex-direction: column;
`

export const Logo = styled.h5``

export const Name = styled.h2``

export const Href = styled.a`
  width: 60%;
  display: flex;
  justify-content: center;
`

export const Instagram = styled(center)`
  grid-column: 2/3;
`

export const Facebook = styled(center)`
  grid-column: 3/4;
`

export const LinkedIn = styled(center)`
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

export const Location = styled.div`
  grid-row: 2/2;
  display: grid;
  grid-template-columns: repeat(2, 50%);
`

export const Adress = styled(center)`
  grid-column: 1/2;
`

export const Phone = styled(center)`
  grid-column: 2/3;
`
