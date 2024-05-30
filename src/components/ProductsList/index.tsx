import Product from '../Products'
import { Lista, Container } from './styles'

export const ProductList = () => (
  <>
    <div className="container">
      <Container>
        <Lista>
          <Product
            prominence="Destaque da Semana"
            category="Japonesa"
            image="//placehold.it/472x217"
            infos={['Teste Destaque', 'Teste Categoria']}
            note={4.7}
            description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
            title="Hioki Sushi "
          />
          <Product
            category="Japonesa"
            image="//placehold.it/472x217"
            infos={['Teste Categoria']}
            note={5.7}
            description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
            title="Hioki Sushi "
          />
          <Product
            category="Japonesa"
            image="//placehold.it/472x217"
            infos={['Teste Categoria']}
            note={6.7}
            description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
            title="Hioki Sushi "
          />
          <Product
            category="Japonesa"
            image="//placehold.it/472x217"
            infos={['Teste Categoria']}
            note={7.7}
            description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
            title="Hioki Sushi "
          />
          <Product
            category="Japonesa"
            image="//placehold.it/472x217"
            infos={['Teste Categoria']}
            note={8.7}
            description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
            title="Hioki Sushi "
          />
          <Product
            category="Japonesa"
            image="//placehold.it/472x217"
            infos={['Teste Categoria']}
            note={9.7}
            description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
            title="Hioki Sushi "
          />
        </Lista>
      </Container>
    </div>
  </>
)

export default ProductList
