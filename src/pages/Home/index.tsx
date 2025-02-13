import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: pratos = [], isLoading } = useGetRestaurantesQuery()

  return (
    <>
      <Banner />
      <ProductList pratos={pratos} isLoading={isLoading} />
    </>
  )
}

export default Home
