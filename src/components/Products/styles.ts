import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  margin-bottom: 40px;
  position: relative;

  ${TagContainer} {
    position: absolute;
    right: 16px;
    top: 16px;
  }
`

export const Content = styled.div`
  padding: 8px;
`

export const Avaliacao = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
`
export const Nota = styled.div`
  display: flex;
  justify-content: end;
  align-itens: end;
  span {
    margin-right: 8px;
    font-weight: 700;
    font-size: 18px;
  }
`

export const Descricao = styled.div`
  padding: 16px 0 16px;
`
