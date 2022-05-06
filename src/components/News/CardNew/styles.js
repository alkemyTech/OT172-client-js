import styled from 'styled-components'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap:.7rem;
  border-bottom: 2px solid #000066;
  margin: 1rem;
  padding: 1rem ;
`
export const Titulo = styled.h1`
  font-size:2rem;
  margin: auto ;
`

export const Image = styled.img`
  height: 100px;
  width: fit-content;
  margin: auto ;
`

export const Category = styled.article`
  font-size: 1rem;
  width: 10rem ;
  background: #329378;
  color: #fff;
  border-radius: 5rem;
  font-size: 0.75em;
  border-color: transparent;
    box-shadow: 0 0 0 2px transparent;
    box-sizing: border-box;
    font-weight: 700;
    line-height: 1;
    overflow: hidden;
    padding: 0.25em 0.4em 0.25em 0.4em;
    text-align: center;
    text-decoration: none;
    text-indent: 0;
    vertical-align: middle;
`

export const Content = styled.article`
  font-size: 1rem;
`