import PerfilBanner from '../../components/PerfilBanner'
import PerfilList from '../../components/PerfilList'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'
import { CardapioDePratos } from '../Home'
import { useEffect, useState } from 'react'

const Perfil = () => {
  const { id } = useParams() // Obtém o ID da URL

  // A API está retornando um objeto em vez de um array. Portanto, ajustamos o estado prato para ser um objeto do tipo CardapioDePratos ou null inicialmente.
  const [prato, setPrato] = useState<CardapioDePratos | null>(null) // Estado para armazenar os dados do prato

  useEffect(() => {
    // Faz a requisição para a API usando o ID
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log('Dados recebidos da API:', res) // Log dos dados recebidos
        setPrato(res) // Armazena os dados no estado
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error) // Log de erro
      })
  }, [id]) // Executa o efeito quando o ID muda

  if (!prato) {
    return <h3>Carregando...</h3> // Exibe mensagem de carregamento enquanto os dados não são recebidos
  }

  return (
    <>
      <PerfilBanner prato={prato} />
      <PerfilList pratos={[prato]} />
      {/* Passa os dados do prato como um array contendo um único objeto */}
      <Footer />
    </>
  )
}

export default Perfil
