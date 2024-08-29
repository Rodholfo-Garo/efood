import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  position: relative;
  padding: 8px;
  background-color: ${cores.larajaEscuro};

  img {
    display: block;
    width: 100%;
    height: 167px;
    object-fit: cover;
  }
`

export const Content = styled.div`
  border: 1px solid ${cores.larajaEscuro};
  display: block;
  color: ${cores.textoBotao};

  ${ButtonContainer} {
    background-color: ${cores.textoBotao};
    color: ${cores.larajaEscuro};
    display: block;
    width: 100%;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
`
export const Descricao = styled.div`
  display: block;
  padding: 8px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`
