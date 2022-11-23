import Modal, { ModalProps } from 'components/shared/Modal'
import { createContext, ReactNode, useEffect, useState } from 'react'

export type Modal = ModalProps & {
  identifier: string
}

type ModalContextProps = {
  modals: Modal[]
  addModal: (modal: Modal) => void
  closeModal: (identifier: string) => void
}

type ModalProviderProps = {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextProps)

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modals, setModals] = useState<Modal[]>([])

  const addModal = (modal: Modal) =>
    setModals(state => [...state, { ...modal, opened: true }])

  const closeModal = (identifier: string) => {
    setModals(state =>
      state.map(modal => {
        if (modal.identifier === identifier) return { ...modal, opened: false }

        return modal
      })
    )
  }

  const removeModalFromList = (identifier: string) => {
    setModals(state => state.filter(modal => modal.identifier !== identifier))
  }

  useEffect(() => {
    const closedModal = modals.find(modal => !modal.opened)

    if (closedModal) {
      const timeoutBeforeRemove = setTimeout(
        () => removeModalFromList(closedModal.identifier),
        500
      )

      return () => clearTimeout(timeoutBeforeRemove)
    }
  }, [modals])

  return (
    <ModalContext.Provider value={{ modals, addModal, closeModal }}>
      {modals.map(modal => (
        <Modal
          key={modal.identifier}
          {...modal}
          onClose={() => closeModal(modal.identifier)}
        />
      ))}
      {children}
    </ModalContext.Provider>
  )
}
