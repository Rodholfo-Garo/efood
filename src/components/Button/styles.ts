import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  font-size: 14px;
  font-weight: 700;
  background-color: ${cores.larajaEscuro};
  color: ${cores.textoBotao};
  border: none;
  padding: 4px 6px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  background-color: ${cores.larajaEscuro};
  color: ${cores.textoBotao};
  border: none;
  padding: 4px 6px;
  text-decoration: none;
`
