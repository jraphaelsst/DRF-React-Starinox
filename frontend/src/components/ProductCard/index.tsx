import foto from '../../assets/images/portas_final_1_peq.png'

import { Card, Titulo } from './styles'

type Props = {
  title: string
}

const ProductCard = ({ title }: Props) => {
  return (
    <Card to="" title="Clique para ver mais detalhes">
      <img src={foto} alt="" />
      <div>
        <Titulo>{title}</Titulo>
      </div>
    </Card>
  )
}

export default ProductCard
