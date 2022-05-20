import { FiX } from 'react-icons/fi'
import { ActionButton } from '../actionButton'
import * as S from './styled'

interface ModalProps {
  children?: React.ReactNode
  title: string
  onClose?: () => void
  show: boolean
}

export const Modal = (props: ModalProps) => {
  if (!props.show) {
    return null
  }
  return (
    <>
      <S.Overlay>
        <S.Container
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
        >
          <S.Header>
            <S.Title>{props.title}</S.Title>
            <ActionButton onClick={props.onClose} icon={FiX} />
          </S.Header>
          {props.children}
        </S.Container>
      </S.Overlay>
    </>
  )
}
