import { ReactNode } from 'react'

export interface IModal {
  children: ReactNode
  closeOnOverlayClick?: boolean
  closeOnEsc?: boolean
  maxWidth?: string
  open: boolean
  preventScroll?: boolean
  onClose?: () => void
}

export interface IModalComponent extends IModal {
  animationStyle: any
}
