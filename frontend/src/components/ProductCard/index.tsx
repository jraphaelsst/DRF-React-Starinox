import foto from '../../assets/images/portas_final_1_peq.png'

import { Card, CardBox, Img, Title } from './styles'

export type Props = {
  title: string
}

const ProductCard = ({ title }: Props) => {
  return (
    <CardBox>
      <Card to="" title="Clique para ver mais detalhes">
        <Img style={{ backgroundImage: `url(${foto})` }}></Img>
        <Title>{title}Lorem ipsum silor dolor</Title>
      </Card>
      <div>
        <p></p>
      </div>
    </CardBox>
  )
}

export default ProductCard
