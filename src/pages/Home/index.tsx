import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import Footer from '../../components/Footer'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao?: string
}

export type CardapioDePratos = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const [pratos, setPratos] = useState<CardapioDePratos[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPratos(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductList pratos={pratos} />
      <Footer />
    </>
  )
}

export default Home
