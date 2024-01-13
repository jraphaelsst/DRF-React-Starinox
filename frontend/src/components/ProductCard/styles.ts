import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const Card = styled(Link)`
  background-color: ${cores.primaria};
  padding: 8px;
  border-radius: 8px;
  text-decoration: none;
  display: block;
  height: 100%;
  color: ${cores.textoEscuro};
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.3);
  transition: all 0.1s ease-in-out;

  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &:hover {
    transform: scale(1.015);
    box-shadow: 4px 4px 6px 2px rgba(0, 0, 0, 0.3);
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  margin: 16px 0 12px;
  text-align: center;
`
