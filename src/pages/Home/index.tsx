import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'

export type cardapioDePratos = {
  id: number
  titulo: string
  destacado?: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Home = () => {
  const [pratos, setPratos] = useState<cardapioDePratos[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPratos(res))
  }, [])
  return (
    <>
      <Banner />
      <ProductList pratos={pratos} />
    </>
  )
}

export default Home
