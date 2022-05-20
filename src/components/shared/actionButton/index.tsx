import * as S from './styled'

interface ButtonProps {
  icon: any
  size?: string
  onClick?: () => void
}

export const ActionButton = (props: ButtonProps) => {
  const Icon = props.icon
  return (
    <S.Button onClick={props.onClick} {...props}>
      <Icon data-testid="icon" size={props.size} />
    </S.Button>
  )
}
