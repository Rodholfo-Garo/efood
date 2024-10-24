import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import { useGetRestaurantesQuery } from '../../services/api'

export type Restaurantes = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao?: string
}

const Home = () => {
  const { data: pratos = [], isLoading } = useGetRestaurantesQuery()

  return (
    <>
      <Banner />
      <ProductList pratos={pratos} />
    </>
  )
}

export default Home
