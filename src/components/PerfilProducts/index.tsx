import Button from '../Button'
import * as S from './styles'

type Props = {
  id: number
  title: string
  description: string
  image: string
  openModal?: () => void
}

export const PerfilProduct = ({
  description,
  title,
  image,
  openModal
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 150) {
      return description.slice(0, 164) + '...'
    }
    return description
  }
  return (
    <>
      <div className="container">
        <S.Card>
          <img src={image} alt={title} />
          <S.Content>
            <S.Title>{title}</S.Title>
            <S.Description>{getDescription(description)}</S.Description>
            <Button type="button" title="Comprar" onClick={openModal}>
              Mais detalhes
            </Button>
          </S.Content>
        </S.Card>
      </div>
    </>
  )
}

export default PerfilProduct
