import { Card, Title, Descricao, Content } from './styles'
import Button from '../Button'

type Props = {
  title: string
  description: string
  image: string
  abrirModal?: () => void
}

export const PerfilProduct = ({
  description,
  title,
  image,
  abrirModal
}: Props) => (
  <>
    <div className="container">
      <Card>
        <img src={image} alt={title} />
        <Content>
          <Title>{title}</Title>
          <Descricao>{description}</Descricao>
          <Button type="button" title="Comprar" onClick={abrirModal}>
            Adicionar ao carrinho
          </Button>
        </Content>
      </Card>
    </div>
  </>
)

export default PerfilProduct
