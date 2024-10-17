import PerfilBanner from '../../components/PerfilBanner'
import PerfilList from '../../components/PerfilList'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'
import { useGetPratosQuery } from '../../services/api'
import Cart from '../../components/Cart'

const Perfil = () => {
  const { id } = useParams() // Obtém o ID da URL
  // O Sinal ! diz q o ID é obrigatorio
  const { data: prato, isLoading } = useGetPratosQuery(id!)

  if (!prato) {
    return <h3>Carregando...</h3> // Exibe mensagem de carregamento enquanto os dados não são recebidos
  }

  return (
    <>
      <PerfilBanner prato={prato} />
      {/* Passa os dados do prato como um array contendo um único objeto */}
      <PerfilList pratos={[prato]} />
      <Cart />
    </>
  )
}

export default Perfil
