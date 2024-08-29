import { Card, Title, Descricao, Content } from './styles'
import Button from '../Button'

type Props = {
  id: number
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
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 164) + '...'
    }
    return descricao
  }
  return (
    <>
      <div className="container">
        <Card>
          <img src={image} alt={title} />
          <Content>
            <Title>{title}</Title>
            <Descricao>{getDescricao(description)}</Descricao>
            <Button type="button" title="Comprar" onClick={abrirModal}>
              Adicionar ao carrinho
            </Button>
          </Content>
        </Card>
      </div>
    </>
  )
}

export default PerfilProduct
