import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Header = styled.header`
  width: 100%;
  height: 186px;
  display: flex;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: center; /* Centraliza o conteúdo verticalmente */
  background-color: ${colors.BlushPink}; /* Ajuste conforme o tema */
  text-decoration: none;

  @media (max-width: ${breakpoints.tablet}) {
    height: 100%;
  }

  .container {
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    width: 100%;
    height: 100%;

    @media (max-width: ${breakpoints.tablet}) {
      display: block;
    }
  }

  nav {
    width: 100%;

    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`

export const Links = styled.ul`
  display: flex;
  justify-content: space-between; /* Coloca os itens nas extremidades */
  align-items: center; /* Alinha os itens verticalmente */
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%; /* Garante que o contêiner ocupe 100% da largura */
  height: 100%; /* Alinha os itens verticalmente */

  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 16px;
  }
`
export const LinkItem = styled.li`
  display: flex;
  align-items: center; /* Centraliza os elementos verticalmente */
  text-decoration: none;

  img {
    display: block;
    height: 50px; /* Ajuste o tamanho necessário */
    width: auto; /* Mantém a proporção */
    margin: 0 auto; /* Garante que a imagem esteja no centro do <li> */
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
    text-align: right;
    cursor: pointer;
  }
`

export const Apresentacao = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 25px 0 32px 0;
  color: #fff;

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    h2 {
      font-size: 32px;
      font-weight: 100;
    }

    h1 {
      font-size: 32px;
      font-weight: 900; /* Corrigido erro de digitação */
    }
  }
`

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* Mantém a cor conforme o tema */
  font-size: 18px;
  display: flex;
  font-weight: 900; /* Restaura a espessura da fonte */
  color: inherit; /* Mantém a cor do tema */
  align-items: center; /* Alinha centralmente com a imagem */

  &:visited {
    color: ${colors.BlushPink};
  }
`

export const CartLink = styled.a`
  display: flex;
`

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 16px 0;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Hamburguer = styled.div`
  width: 32px;
  cursor: pointer;
  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${colors.BlushPink};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`
