// import { useEffect, useState } from 'react'
import logo from '../../assets/images/logo-sem-fundo.png'

import { HeaderBar, HeaderRow, LinkItem, Links, LinkTo, Logo } from './styles'

const Navbar = () => {
  return (
    <HeaderBar id="navbar">
      <HeaderRow className="container">
        <LinkTo to="/">
          <Logo src={logo} alt="Logo" />
        </LinkTo>
        <nav>
          <Links className="links">
            <LinkItem className="linkItem">
              <LinkTo to="/empresa">Empresa</LinkTo>
            </LinkItem>
            <LinkItem className="linkItem">
              <LinkTo to="/produtos">Produtos</LinkTo>
            </LinkItem>
            <LinkItem className="linkItem">
              <LinkTo to="/localizacao">Localização</LinkTo>
            </LinkItem>
            <LinkItem className="linkItem">
              <LinkTo to="/contato">Contato</LinkTo>
            </LinkItem>
          </Links>
        </nav>
      </HeaderRow>
    </HeaderBar>
  )
}

export default Navbar
