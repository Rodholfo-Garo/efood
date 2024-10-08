import { cardapioDePratos } from '../../pages/Home'
import Product from '../Products'
import { Lista, Container } from './styles'

export type Props = {
  pratos: cardapioDePratos[]
}

export const ProductList = ({ pratos }: Props) => {
  const getPratosTag = (prato: cardapioDePratos) => {
    const tags = []

    if (prato.tipo) {
      tags.push(prato.tipo)
    }

    if (prato.destacado) {
      tags.push('Destaque da Semana')
    }
    return tags
  }

  return (
    <>
      <div className="container">
        <Container>
          <Lista>
            {pratos.map((prato) => (
              <Product
                key={prato.id}
                image={prato.capa}
                infos={getPratosTag(prato)}
                note={prato.avaliacao}
                description={prato.descricao}
                title={prato.titulo}
              />
            ))}
          </Lista>
        </Container>
      </div>
    </>
  )
}

export default ProductList
