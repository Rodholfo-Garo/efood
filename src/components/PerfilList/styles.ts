import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Container = styled.section`
  margin-top: 56px;
`

export const Items = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Três colunas
  gap: 32px; // Espaçamento entre os itens

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Item = styled.li`
  list-style: none; // Remover estilo de lista
`

export const Modal = styled.div`
  color: ${cores.textoBotao};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  padding: 32px;
  background-color: ${cores.larajaEscuro};
  position: relative; // Corrigido de "postion" para "position"
  z-index: 1;
`
export const ModalAberto = styled.div`
  display: flex;

  ${ButtonContainer} {
    background-color: ${cores.textoBotao};
    color: ${cores.larajaEscuro};
    display: block;
    width: 218px;
  }
`

export const ModalContentFoto = styled.div`
  img {
    width: 280px;
    height: 280px;
    margin-right: 24px;
    object-fit: cover;
  }
`
export const ModalContentTexto = styled.div`
  display: block;

  h3 {
    font-size: 18px;
    font-weight: 900;
  }
  p {
    max-width: 656px;
    padding-top: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  button {
    margin-top: 16px;
  }
`

export const BtnFechar = styled.div`
  position: absolute; // Posiciona o botão à direita
  top: 8px; // Margem de 8px no topo
  right: 8px; // Margem de 8px na direita
  img {
    cursor: pointer;
  }
`
