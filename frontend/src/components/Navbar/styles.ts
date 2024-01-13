import styled from 'styled-components'

import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderBar = styled.div`
  background-color: ${cores.primaria};
  padding: 24px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  width: 100%;
  z-index: 1;
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  height: 30px;
`

export const Links = styled.ul`
  display: flex;
  margin-left: 24px;
`

export const LinkItem = styled.li`
  margin-right: 32px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
`

export const LinkTo = styled(Link)`
  color: ${cores.textoEscuro};

  &:hover {
    text-decoration: underline;
  }
`
