import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/* --color: ${props => props.color}; */
:root {
    --color-primario: red;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif
}
`
