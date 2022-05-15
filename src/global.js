import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --white-01: #FFFFFF;
    --white-02: #EFFFFA;
    --black-01: #000000;
    --black-02: #0D0C1D;
    --blue-01: #000066;
    --blue-02: #0000FF;
    --gray-01: #EAEAEA;
    --gray-02: #413E3D;
    --red-01: #F91506;

    --header-height: 3rem;
  }
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    /* display: flex; */
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }

  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }

  div {
    text-align: center;
  }

  small {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.link};
    text-decoration: none;
  }
`
