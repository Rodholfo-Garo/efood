import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import Pratos from '../../models/Pratos'
import hiokiSushi from '../../assets/images/hiokiSushi.png'
import trattoria from '../../assets/images/trattoria.png'

const cardapioDePratos: Pratos[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    note: 5.5,
    image: hiokiSushi,
    infos: ['Teste Destaque2', 'Teste Categoria2'],
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    note: 6.5,
    image: trattoria,
    infos: ['Teste Categoria2'],
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    note: 7.5,
    image: trattoria,
    infos: ['Teste Categoria2'],
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 4,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    note: 8.5,
    image: trattoria,
    infos: ['Teste Categoria2'],
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    note: 9.5,
    image: trattoria,
    infos: ['Teste Categoria2'],
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    note: 4.5,
    image: trattoria,
    infos: ['Teste Categoria2'],
    title: 'La Dolce Vita Trattoria'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList pratos={cardapioDePratos} />
  </>
)

export default Home
