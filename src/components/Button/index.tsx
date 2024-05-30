import { ButtonContainer } from './styles'

type Props = {
  type:'button' | 'link'
  title: string
  to?: string
  // Permite o recebimento de uma função que não tem agumentos
  onClick?: () => void
}

export const Button = () => <ButtonContainer>Saiba Mais</ButtonContainer>

export default Button
