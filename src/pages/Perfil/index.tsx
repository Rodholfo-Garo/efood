import PerfilBanner from '../../components/PerfilBanner'
import PerfilList from '../../components/PerfilList'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'
import { cardapioDePratos } from '../Home'
import { useEffect, useState } from 'react'

const Perfil = () => {
  const { id } = useParams()
  const [pratos, setPratos] = useState<cardapioDePratos[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPratos(res))
  }, [])

  return (
    <>
      <PerfilBanner />
      <PerfilList pratos={pratos} />
      <Footer />
    </>
  )
}

export default Perfil
