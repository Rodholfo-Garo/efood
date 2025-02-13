import { useParams } from 'react-router-dom'

import Loader from '../../components/Loader'
import PerfilBanner from '../../components/PerfilBanner'
import PerfilList from '../../components/PerfilList'
import Cart from '../../components/Cart'
import { useGetPratosQuery } from '../../services/api'

// CASTING - Vai Tipar fortemente o parametro ID (o RRD não tipa)
type PratoParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as PratoParams // Obtém o ID da URL
  // O Sinal ! diz q o ID é obrigatorio
  const { data: prato, isLoading } = useGetPratosQuery(id)

  if (!prato) {
    return <Loader /> // Exibe mensagem de carregamento enquanto os dados não são recebidos
  }

  return (
    <>
      <PerfilBanner prato={prato} />
      {/* Passa os dados do prato como um array contendo um único objeto */}
      <PerfilList pratos={[prato]} isLoading={isLoading} />
      <Cart />
    </>
  )
}

export default Perfil
