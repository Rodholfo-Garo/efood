import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 380px;
  padding: 64px 0 40px;
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    h1 {
      width: 539px;
      text-align: center;
      font-size: 36px;
      font-weight: 900;
    }
    @media (max-width: ${breakpoints.desktop}) {
      h1 {
        width: 100%;
      }
    }
  }
`
