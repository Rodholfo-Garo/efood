import { Card, Title, Descricao, Avaliacao, Nota, Content } from './styles'
import star from '../../assets/images/estrela.png'
import Button from '../Button'
import Tag from '../Tag'

export const Product = () => (
  <>
    <div className="container">
      <Card>
        <img src="//placehold.it/472x217" alt="produto"></img>
        <Tag>Destaque da Semana</Tag>
        <Tag>Japonesa</Tag>
        <Content>
          <Avaliacao>
            <Title>Hioki Sushi</Title>
            <Nota>
              <span>4.9</span>
              <img src={star} alt="" />
            </Nota>
          </Avaliacao>
          <Descricao>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas
            iure unde non ut ab, corporis perferendis officia accusantium? Atque
            fugit natus illo minima. Suscipit amet esse cupiditate deleniti
            neque?
          </Descricao>
          <Button />
        </Content>
      </Card>
    </div>
  </>
)

export default Product
