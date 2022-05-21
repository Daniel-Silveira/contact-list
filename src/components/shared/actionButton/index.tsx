import { Loading } from '../loading'
import * as S from './styled'

interface ButtonProps {
  icon: any
  size?: string
  onClick?: () => void
  loading?: boolean
  'data-testid'?: string
  'data-cy'?: string
}

export const ActionButton = (props: ButtonProps) => {
  const Icon = props.icon
  return (
    <S.Button onClick={props.onClick} data-cy={props['data-cy']} data-testid={props['data-testid']}>
      {!!props.loading ? <Loading /> : <Icon data-testid="icon" size={props.size} />}
    </S.Button>
  )
}
