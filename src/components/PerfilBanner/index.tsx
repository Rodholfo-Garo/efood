import vetor from '../../assets/images/vetor.png'
import logo from '../../assets/images/logo.png'
import fundoPerfil from '../../assets/images/imagem_de_fundo.png'
import {
  Header,
  Apresentacao,
  HomeLink,
  Hamburguer,
  Links,
  LinkItem,
  MenuWrapper,
  NavMobile
} from './styles'
import { Link } from 'react-router-dom'
import { Restaurantes } from '../../pages/Home'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { RootReducer } from '../../store'

export type Props = {
  prato: Restaurantes
}

export const PerfilBanner = ({ prato }: Props) => {
  const dispatch = useDispatch()

  // Conta os Item ao carrinho
  const { items } = useSelector((state: RootReducer) => state.cart)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Função para abrir o carrinho
  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <Header style={{ backgroundImage: `url(${vetor})` }}>
        <div className="container">
          <MenuWrapper
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }}
          >
            <Hamburguer>
              <span />
              <span />
              <span />
            </Hamburguer>
            <h4 onClick={openCart}>
              <span>{items.length}</span> produto(s)
            </h4>
          </MenuWrapper>

          <nav>
            <Links>
              <LinkItem style={{ flex: 1 }}>
                {/* Item à esquerda */}
                <HomeLink to="/">Restaurantes</HomeLink>
              </LinkItem>

              <LinkItem style={{ flex: 0 }}>
                {/* Item central */}
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </LinkItem>

              <LinkItem style={{ flex: 1, justifyContent: 'flex-end' }}>
                {/* Item à direita */}
                <h4 onClick={openCart}>
                  <span>{items.length}</span> produto(s) no carrinho
                </h4>
              </LinkItem>
            </Links>
          </nav>
          <NavMobile className={isMenuOpen ? 'is-open' : ''}>
            <Links>
              <LinkItem style={{ flex: 1 }}>
                {/* Item à esquerda */}
                <HomeLink to="/">Restaurantes</HomeLink>
              </LinkItem>
            </Links>
          </NavMobile>
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
