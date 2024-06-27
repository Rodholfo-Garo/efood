import PratosPerfil from '../../models/PratosPerfil'
import Product from '../PerfilProducts'
import { Lista, Container } from './styles'

export type Props = {
  pratos: PratosPerfil[]
}

export const PerfilList = ({ pratos }: Props) => (
  <>
    <div className="container">
      <Container>
        <Lista>
          {pratos.map((prato) => (
            <Product
              key={prato.id}
              image={prato.image}
              description={prato.description}
              title={prato.title}
            />
          ))}
        </Lista>
      </Container>
    </div>
  </>
)

export default PerfilList
