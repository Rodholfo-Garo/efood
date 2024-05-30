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

type Props = {
  title: string
  note: number
  description: string
  infos?: string[]
  image: string
}

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
            to="/produto"
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
