import vetor from '../../assets/images/vetor.png'
import logo from '../../assets/images/logo.png'
import fundoPerfil from '../../assets/images/imagem_de_fundo.png'
import { Header, Apresentacao, HomeLink } from './styles'
import { Link } from 'react-router-dom'
import { Restaurantes } from '../../pages/Home'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export type Props = {
  prato: Restaurantes
}

export const PerfilBanner = ({ prato }: Props) => {
  const dispatch = useDispatch()

  // Adicionar Item ao carrinho
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <Header style={{ backgroundImage: `url(${vetor})` }}>
        <div className="container">
          <HomeLink to="/">
            <h3>Restaurantes</h3>
          </HomeLink>

          <Link to="/">
            <img src={logo} alt="efood" />
          </Link>

          <h4 onClick={openCart}>
            {/* adicionar item ao carrinho */}
            <span>{items.length}</span> produto(s) no carrinho
          </h4>
        </div>
      </Header>

      <Apresentacao style={{ backgroundImage: `url(${fundoPerfil})` }}>
        <div className="container">
          <h2>{prato.tipo}</h2>
          <h1>{prato.titulo}</h1>
        </div>
      </Apresentacao>
    </>
  )
}

export default PerfilBanner
