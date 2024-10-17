import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import lixo from '../../assets/images/lixeira-de-reciclagem 1.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top:0;
  left;0;
  width:100%;
  height:100%;
  display:flex;
  justify-content:flex-end;
  z-index:1;
`

export const SideBar = styled.aside`
  width: 340px;
  background-color: ${cores.larajaEscuro};
  z-index: 1;
  padding: 32px 8px 0 8px;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    background-color: ${cores.textoBotao};
    color: ${cores.larajaEscuro};
  }
`

export const Prices = styled.p`
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.textoBotao};
  display: flex;
  justify-content: space-between;
  line-height: 16.41px;
  margin-bottom: 16px;
`
export const CartItem = styled.li`
  display: flex;
  background-color: #ffff;
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
  }
  button {
    background-image: url(${lixo});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
