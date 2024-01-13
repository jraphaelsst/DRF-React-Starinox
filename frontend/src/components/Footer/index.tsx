import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Acesso Rápido</SectionTitle>
          <Links>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/empresa">Empresa</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/localizacao">Localização</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Produtos</SectionTitle>
          <Links>
            <li>
              <Link to="/">Box</Link>
            </li>
            <li>
              <Link to="/empresa">Corrimão</Link>
            </li>
            <li>
              <Link to="/produtos">Ducha</Link>
            </li>
            <li>
              <Link to="/localizacao">Escada</Link>
            </li>
            <li>
              <Link to="/contato">Grelha</Link>
            </li>
            <li>
              <Link to="/">Porta</Link>
            </li>
            <li>
              <Link to="/empresa">Sauna</Link>
            </li>
            <li>
              <Link to="/produtos">Dispenser</Link>
            </li>
            <li>
              <Link to="/localizacao">Revestimento</Link>
            </li>
            <li>
              <Link to="/contato">Visor Pisc</Link>
            </li>
            <li>
              <Link to="/contato">Diversos</Link>
            </li>
          </Links>
        </FooterSection>
      </div>
    </Container>
  )
}

export default Footer
