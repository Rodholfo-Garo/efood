import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  margin-bottom: 40px;
  position: relative;
  padding: 8px;
  background-color: ${cores.larajaEscuro};
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
