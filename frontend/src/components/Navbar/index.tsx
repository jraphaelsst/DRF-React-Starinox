import logo from '../../assets/images/logo-sem-fundo.png'

import {
  Hamburguer,
  HeaderBar,
  HeaderRow,
  LinkItem,
  Links,
  LinkTo,
  Logo
} from './styles'

const Navbar = () => (
  <HeaderBar>
    <HeaderRow>
      <div className="nav">
        <Hamburguer>
          <span />
          <span />
          <span />
        </Hamburguer>
        <LinkTo to="/home">
          <Logo src={logo} alt="Logo" />
        </LinkTo>
        <nav>
          <Links className="links">
            <LinkItem className="linkItem">
              <LinkTo to="/quem-somos">Empresa</LinkTo>
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
      </div>
      <div className="contact-links">
        <Links>
          <LinkItem>Facebook</LinkItem>
          <LinkItem>Instagram</LinkItem>
          <LinkItem>WhatsApp</LinkItem>
        </Links>
      </div>
    </HeaderRow>
  </HeaderBar>
)

export default Navbar
