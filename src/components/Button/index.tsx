import * as S from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  // Permite o recebimento de uma função que não tem argumentos
  onClick?: () => void
  // texto do botão
  children: string
  disabled?: boolean
}

export const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </S.ButtonContainer>
    )
  }
  return (
    <S.ButtonLink to={to as string} title={title} type="link">
      {children}
    </S.ButtonLink>
  )
}

export default Button
