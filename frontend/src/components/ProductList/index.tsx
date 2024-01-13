import { Container, List } from './styles'

import ProductCard from '../ProductCard'

type Props = {
  title: string
}

const ProductList = ({ title }: Props) => {
  return (
    <Container>
      <div className="container">
        <h2>{title}</h2>
        <List>
          <li>
            <ProductCard title="Box" />
          </li>
          <li>
            <ProductCard title="Corrimão" />
          </li>
          <li>
            <ProductCard title="Ducha para Piscina" />
          </li>
          <li>
            <ProductCard title="Escada" />
          </li>
          <li>
            <ProductCard title="Grelha" />
          </li>
          <li>
            <ProductCard title="Porta" />
          </li>
          <li>
            <ProductCard title="Porta e Caixilho para Sauna" />
          </li>
          <li>
            <ProductCard title="Dispenser para Álcool Gel" />
          </li>
          <li>
            <ProductCard title="Revestimento" />
          </li>
          <li>
            <ProductCard title="Visor de Piscina" />
          </li>
          <li>
            <ProductCard title="Diversos" />
          </li>
        </List>
      </div>
    </Container>
  )
}

export default ProductList
