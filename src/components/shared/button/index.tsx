import { Loading } from '../loading'
import * as S from './styled'

interface ButtonProps {
  children?: any
  text?: string
  onClick?: () => void
  width?: string
  'data-cy'?: string
  loading?: boolean
}

export const Button = (props: ButtonProps) => {
  const children = props.children || props.text
  return (
    <S.Button width={props.width} onClick={props.onClick} data-cy={props['data-cy']}>
      {props.loading ? <Loading /> : children}
    </S.Button>
  )
}
