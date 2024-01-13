import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'

import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.primaria};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;
  letter-spacing: 1px;
  box-shadow: 6px 8px 6px 8px rgba(0, 0, 0, 0.3);
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`

export const SectionTitle = styled.h4`
  font-size: 24px;
  margin-bottom: 16px;
`

export const Links = styled.ul`
  display: flex;
`

export const Link = styled(HashLink)`
  color: ${cores.textoClaro};
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }
`
