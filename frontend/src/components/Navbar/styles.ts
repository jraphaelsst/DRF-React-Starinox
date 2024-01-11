import styled from 'styled-components'

import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderBar = styled.div`
  background-color: ${cores.primaria};
  padding: 24px;
  box-shadow: 8px;
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav {
    display: flex;
    align-items: center;
  }
`

export const Logo = styled.img`
  height: 30px;
`

export const Hamburguer = styled.div``

export const Links = styled.ul`
  display: flex;
  margin-left: 24px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const LinkTo = styled(Link)`
  color: ${cores.textoEscuro};
`
