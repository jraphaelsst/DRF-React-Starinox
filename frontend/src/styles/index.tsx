import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#eee',
  preto: '#111',
  cinza: '#333',
  primaria: 'rgb(130, 190, 255)',
  secundaria: '#CAEEFF',
  textoEscuro: '#081679',
  textoClaro: '#3B88D5'
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
    background-color: ${cores.secundaria};
    color: ${cores.textoEscuro};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
