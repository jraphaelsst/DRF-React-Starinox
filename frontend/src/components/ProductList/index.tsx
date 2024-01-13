import { Container, List } from './styles'

import ProductCard from '../ProductCard'

type Props = {
  title: string
}
type Product = {
  id: number
  title: string
}
// FUTURAMENTE => vai receber via função com get na API, deixando pronto para isso....
const productList: Array<Product> = [
  { id: 1, title: 'box' },
  { id: 2, title: 'corrimão' },
  { id: 3, title: 'Ducha para Piscina' },
  { id: 4, title: 'Escada' },
  { id: 5, title: 'Grelha' },
  { id: 6, title: 'Porta' },
  { id: 7, title: 'Porta e Caixilho para Sauna' },
  { id: 8, title: 'Dispenser para Álcool Gel' },
  { id: 9, title: 'Revestimento' },
  { id: 10, title: 'Visor de Piscina' },
  { id: 11, title: 'Diversos' }
]

const ProductList = ({ title }: Props) => {
  return (
    <Container>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {productList.map((product: Product) => {
            return (
              <li key={product.id}>
                <ProductCard title={product.title} />
              </li>
            )
          })}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
