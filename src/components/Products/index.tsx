import Button from '../Button'
import Tag from '../Tag'
import star from '../../assets/images/estrela.png'
import * as S from './styles'

// Como cada Card pode ter informações diferentes, trabalhamos com um array de strings e apartir dele fazemos a renderização das tags, cada tag renderiza um item do array.

type Props = {
  id: number
  title: string
  note: number
  description: string
  infos?: string[]
  image: string
}

// :Props aplica a tipagem.

export const Product = ({
  description,
  infos,
  note,
  title,
  image,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 155) {
      return descricao.slice(0, 180) + '...'
    }
    return descricao
  }

  return (
    <>
      <div className="container">
        <S.Card
        // to={`/perfil/${id}`}
        // title={`Clique aqui para conhecer o Restaurante ${title}`}
        >
          <img src={image} alt={title} />
          <S.Infos>
            {infos && infos.map((info) => <Tag key={info}>{info}</Tag>)}
          </S.Infos>
          <S.Content>
            <S.Avaliacao>
              <S.Title>{title}</S.Title>
              <S.Nota>
                <span>{note}</span>
                <img src={star} alt="" />
              </S.Nota>
            </S.Avaliacao>
            <S.Descricao>{getDescricao(description)}</S.Descricao>
            <Button
              type="link"
              to={`/perfil/${id}`}
              title="Clique aqui para aproveitar esta oferta"
            >
              Saiba Mais
            </Button>
          </S.Content>
        </S.Card>
      </div>
    </>
  )
}

export default Product
