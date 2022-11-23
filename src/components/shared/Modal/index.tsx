import * as S from './styles'
import { ReactNode } from 'react'
import Close from '../Icons/Close'

export type ModalProps = {
  title: string
  width: number
  content: ReactNode
  opened: boolean
  onClose?: () => void
}

const Modal = ({ title, content, width, onClose, opened }: ModalProps) => {
  const handleOnCloseClick = () => {
    onClose && onClose()
  }

  return (
    <S.Wrapper onClick={handleOnCloseClick} opened={opened}>
      <S.Box width={width} onClick={e => e.stopPropagation()}>
        <S.BoxHeader>
          <S.Title>{title}</S.Title>
          <S.CloseButton onClick={handleOnCloseClick}>
            <Close />
          </S.CloseButton>
        </S.BoxHeader>
        <S.BoxContent>{content}</S.BoxContent>
      </S.Box>
    </S.Wrapper>
  )
}

export default Modal
