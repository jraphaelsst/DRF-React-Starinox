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
  height: 48px;
`

export const Links = styled.ul`
  display: flex;
  /* margin-left: 24px; */
`

export const LinkItem = styled.li`
  margin-left: 32px;
  /* text-transform: uppercase; */
`
export const LinkTo = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: ${cores.preto};
  font-weight: bold;
`
export const LinkAnimation = styled.div`
  padding: 1px;
  border-radius: 1px;
  background: linear-gradient(currentColor 0 0) var(--p, 0) 100% / var(--d, 0)
    2px no-repeat;
  transition:
    0.3s,
    background-position 0s 0.3s;
  &:hover {
    --d: 100%;
    --p: 100%;
    text-shadow: #eee 1px 0 10px;
  }
`
