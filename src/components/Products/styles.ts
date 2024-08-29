import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Card = styled.div`
  margin-bottom: 40px;
  position: relative;

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Content = styled.div`
  margin-top: -6px;
  padding: 8px 8px 10px 8px;
  border: 1px solid ${cores.corFundo};
  background-color: #fff;
  display: block;
  border: 1px solid ${cores.larajaEscuro};
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
  display: block;
  padding: 16px 0 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`
