import { Button } from '../button'
import * as S from './styled'

interface ContainerProps {
  children?: React.ReactNode
  title?: string
  description?: React.ReactNode
  textButton?: string
  onClick?: () => void
  cyRefButton?: string
}

export const Container = (props: ContainerProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.Wrapper>
          <S.Title>{props.title}</S.Title>
          {props.description}
        </S.Wrapper>
        {!!props.textButton && (
          <Button data-cy={props.cyRefButton} text={props.textButton} onClick={props.onClick} width="15%" />
        )}
      </S.Header>
      {props.children}
    </S.Container>
  )
}
