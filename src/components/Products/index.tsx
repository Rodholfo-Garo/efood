import {
  Card,
  Title,
  Descricao,
  Avaliacao,
  Nota,
  Content,
  Infos
} from './styles'
import star from '../../assets/images/estrela.png'
import Button from '../Button'
import Tag from '../Tag'

// Como cada Card pode ter informações diferentes, trabalhamos com um array de strings e apartir dele fazemos a renderização das tags, cada tag renderiza um item do array.

type Props = {
  title: string
  note: number
  description: string
  infos?: string[]
  image: string
}

// :Props aplica a tipagem.

export const Product = ({ description, infos, note, title, image }: Props) => (
  <>
    <div className="container">
      <Card>
        <img src={image} alt={title} />
        <Infos>
          {infos && infos.map((info) => <Tag key={info}>{info}</Tag>)}
        </Infos>
        <Content>
          <Avaliacao>
            <Title>{title}</Title>
            <Nota>
              <span>{note}</span>
              <img src={star} alt="" />
            </Nota>
          </Avaliacao>
          <Descricao>{description}</Descricao>
          <Button
            type="link"
            to="/perfil"
            title="Clique aqui para aproveitar esta oferta"
          >
            Saiba Mais
          </Button>
        </Content>
      </Card>
    </div>
  </>
)

export default Product
