import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  position: relative;
  padding: 8px;
  background-color: ${colors.BlushPink};

  img {
    display: block;
    width: 100%;
    height: 167px;
    object-fit: cover;
  }
`

export const Content = styled.div`
  border: 1px solid ${colors.BlushPink};
  display: block;
  color: ${colors.PeachCream};

  ${ButtonContainer} {
    background-color: ${colors.PeachCream};
    color: ${colors.BlushPink};
    display: block;
    width: 100%;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
`
export const Description = styled.div`
  display: block;
  padding: 8px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`
