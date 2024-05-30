import Pratos from '../../models/Pratos'
import Product from '../Products'
import { Lista, Container } from './styles'

export type Props = {
  pratos: Pratos[]
}

export const ProductList = ({ pratos }: Props) => (
  <>
    <div className="container">
      <Container>
        <Lista>
          {pratos.map((prato) => (
            <Product
              key={prato.id}
              image={prato.image}
              infos={prato.infos}
              note={prato.note}
              description={prato.description}
              title={prato.title}
            />
          ))}
        </Lista>
      </Container>
    </div>
  </>
)

export default ProductList
