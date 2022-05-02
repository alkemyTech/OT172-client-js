import styled from 'styled-components'
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap:10px;
    grid-auto-rows: minmax(400px,500px);
    max-width: 1000px;
    background-color:#DADADA;
    align-items: center;
    justify-items:center;
`

export const ContactText = styled.p`
    color:black;
    margin:0;
    padding: 25px;
    border-right: 1px solid #999999;
`




