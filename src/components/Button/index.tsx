import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  // Permite o recebimento de uma função que não tem argumentos
  onClick?: () => void
  // texto do botão
  children: string
}

export const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink to={to as string} title={title} type="link">
      {children}
    </ButtonLink>
  )
}

export default Button
