import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#fff',
  preto: '#111',
  cinza: '#333',
  primaria: '#fff',
  secundaria: '#8E959C',
  terciaria: '#090C64',
  textoEscuro: 'rgb(8, 22, 121)',
  textoClaro: 'rgba(8, 22, 121, 0.7)'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${cores.branco};
    color: ${cores.terciaria};
  }

  .container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 16px;
  }

  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(130, 190, 255, 0.3), rgba(130, 190, 255, 0.75), rgba(130, 190, 255, 0.3));
  }
`
