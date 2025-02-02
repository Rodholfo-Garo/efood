import { Restaurantes } from '../../pages/Home'
import Product from '../Products'
import * as S from './styles'

export type Props = {
  pratos: Restaurantes[]
}

export const ProductList = ({ pratos }: Props) => {
  const getPratosTag = (prato: Restaurantes) => {
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
        <S.Container>
          <S.Lista>
            {pratos.map((prato) => (
              <Product
                key={prato.id}
                id={prato.id}
                image={prato.capa}
                infos={getPratosTag(prato)}
                note={prato.avaliacao}
                description={prato.descricao}
                title={prato.titulo}
              />
            ))}
          </S.Lista>
        </S.Container>
      </div>
    </>
  )
}

export default ProductList
