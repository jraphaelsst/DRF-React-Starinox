// import { useEffect, useState } from 'react'
import logo from '../../assets/images/logo-sem-fundo.png'

import {
  HeaderBar,
  HeaderRow,
  LinkAnimation,
  LinkItem,
  Links,
  LinkTo,
  Logo
} from './styles'

const links = [
  {
    link: '/empresa',
    title: 'Empresa'
  },
  {
    link: '/produtos',
    title: 'Produtos'
  },
  {
    link: '/localizacao',
    title: 'Localização'
  },
  {
    link: '/contato',
    title: 'Contato'
  }
]

const Navbar = () => {
  return (
    <HeaderBar id="navbar">
      <HeaderRow className="container">
        <LinkTo to="/">
          <Logo src={logo} alt="Logo" />
        </LinkTo>
        <nav>
          <Links className="links">
            {links.map((item, index) => {
              return (
                <LinkItem className="linkItem" key={index}>
                  <LinkTo to={item.link}>
                    <LinkAnimation>{item.title}</LinkAnimation>
                  </LinkTo>
                </LinkItem>
              )
            })}
          </Links>
        </nav>
      </HeaderRow>
    </HeaderBar>
  )
}

export default Navbar
