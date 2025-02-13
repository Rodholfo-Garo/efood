import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import vetor from '../../assets/images/vetor.png'
import logo from '../../assets/images/logo.png'
import fundoPerfil from '../../assets/images/imagem_de_fundo.png'
import * as S from './styles'
import Loader from '../Loader'

export type Props = {
  prato: Restaurantes
  isLoading?: boolean
}

export const PerfilBanner = ({ prato, isLoading }: Props) => {
  const dispatch = useDispatch()

  // Conta os Item ao carrinho
  const { items } = useSelector((state: RootReducer) => state.cart)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Função para abrir o carrinho
  const openCart = () => {
    dispatch(open())
  }

  if (isLoading) {
    return <Loader />
  }
  return (
    <>
      <S.Header style={{ backgroundImage: `url(${vetor})` }}>
        <div className="container">
          <S.MenuWrapper
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }}
          >
            <S.Hamburguer>
              <span />
              <span />
              <span />
            </S.Hamburguer>
            <h4 onClick={openCart}>
              <span>{items.length}</span> produto(s)
            </h4>
          </S.MenuWrapper>

          <nav>
            <S.Links>
              <S.LinkItem style={{ flex: 1 }}>
                {/* Item à esquerda */}
                <S.HomeLink
                  title="Clique aqui para conhecer nossos restaurantes"
                  to="/"
                >
                  Restaurantes
                </S.HomeLink>
              </S.LinkItem>

              <S.LinkItem style={{ flex: 0 }}>
                {/* Item central */}
                <Link title="Nosso Logo" to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </S.LinkItem>

              <S.LinkItem style={{ flex: 1, justifyContent: 'flex-end' }}>
                {/* Item à direita */}
                <h4 onClick={openCart}>
                  <span>{items.length}</span> produto(s) no carrinho
                </h4>
              </S.LinkItem>
            </S.Links>
          </nav>
          <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
            <S.Links>
              <S.LinkItem style={{ flex: 1 }}>
                {/* Item à esquerda */}
                <S.HomeLink
                  title="Clique aqui para conhecer nossos restaurantes"
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Restaurantes
                </S.HomeLink>
              </S.LinkItem>
            </S.Links>
          </S.NavMobile>
        </div>
      </S.Header>

      <S.Apresentacao style={{ backgroundImage: `url(${fundoPerfil})` }}>
        <div className="container">
          <h2>{prato.tipo}</h2>
          <h1>{prato.titulo}</h1>
        </div>
      </S.Apresentacao>
    </>
  )
}

export default PerfilBanner
