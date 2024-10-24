import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  margin-top: 80px;
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    column-gap: 0px;
  }
`
