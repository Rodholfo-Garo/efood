import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.div`
  width: 100%;
  height: 186px;
  padding: 64px 0 40px;
  text-decoration: none;

  .container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    height: 100%;
    font-size: 18px;
    font-weight: 900;
    margin: 0 auto;

    img {
      grid-column: 2;
    }
    h4 {
      grid-column: 3;
      font-size: 18px;
      font-weight: 900;
      text-align: right;
      cursor: pointer;
    }
  }
`

export const Apresentacao = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 25px 0 32px 0;
  color: #fff;

  .container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:100%;

    h2 {
      font-size: 32px;
      font-weight: 100;
      margin-top:302px:
    }

    h1{
      font-size:32px;
      font-weught:900;
    }
  }

`

export const HomeLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: ${cores.larajaEscuro};
  }
`
export const CartLink = styled.a`
  display: flex;
`
