import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

type InputProps = {
  maxWidth?: string
}

export const Row = styled.div`
  display: flex; /* Alinha os itens lado a lado */
  gap: 30px; /* Espaçamento entre os inputs */
  justify-content: space-between;
`

export const InputGroup = styled.div<InputProps>`
  justify-content: space-between;
  margin-bottom: 8px;
  width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
    font-weight: 700;
    line-height: 16.41px;
  }

  input {
    width: 100%;
    padding: 8px;
    height: 32px;
    background-color: ${cores.textoBotao};
    border: 1px solid ${cores.textoBotao};
  }
  textarea {
    resize: none; /* Impede o redimensionamento */
    height: 60px;
    width: 100%;
    background-color: ${cores.textoBotao};
    border: 1px solid ${cores.textoBotao};
  }
`

export const ButtomContainer = styled.div`
  margin-top: 24px;
  ${ButtonContainer} {
    margin-bottom: 8px;
    height: 24px;
  }
`
