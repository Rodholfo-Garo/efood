import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  margin-top: 56px;
`

export const Items = styled.ul`
  display: flex;
`

export const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
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
  postion: relative;
  z-index: 1;

  > div {
    > img {
      cursor: pointer;
    }
  }

  img {
    max-width: 280px;
  }

  p {
    max-width: 656px;
  }
`
