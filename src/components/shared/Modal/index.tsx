import * as S from './styles'
import { ReactNode } from 'react'
import Close from '../Icons/Close'

export type ModalProps = {
  title?: string
  content?: ReactNode
  opened?: boolean
  width?: number
  onClose?: () => void
}

const Modal = ({
  title,
  content,
  opened = true,
  width = 350,
  onClose
}: ModalProps) => {
  const handleOnCloseClick = () => {
    onClose && onClose()
  }

  return (
    <S.Wrapper onClick={handleOnCloseClick} opened={opened}>
      <S.Box
        width={width}
        onClick={e => e.stopPropagation()}
        hasTitle={Boolean(title)}
      >
        {title && (
          <S.BoxHeader>
            <S.Title>{title}</S.Title>
          </S.BoxHeader>
        )}
        <S.CloseButton onClick={handleOnCloseClick}>
          <Close />
        </S.CloseButton>
        <S.BoxContent>{content}</S.BoxContent>
      </S.Box>
    </S.Wrapper>
  )
}

export default Modal
