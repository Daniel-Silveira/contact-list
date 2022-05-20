import * as S from './styled'

interface ButtonProps {
  children?: any
  text?: string
  onClick?: () => void
  width?: string
  'data-cy'?: string
}

export const Button = (props: ButtonProps) => {
  return (
    <S.Button width={props.width} onClick={props.onClick} data-cy={props['data-cy']}>
      {props.children || props.text}
    </S.Button>
  )
}
