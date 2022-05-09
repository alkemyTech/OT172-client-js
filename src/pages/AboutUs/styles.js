import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
background: rgb(223, 215, 215);
margin: 10px auto;
padding: 5px 30px;
width: 800px;
box-shadow: 0 0 5px black;
`

export const Faculties = styled.div`
justify-content: center;
align-items: center;
padding: 20px;
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
`