import React from 'react'
import { createPortal } from 'react-dom'
import { useTransition } from 'react-spring'

// Transitions
import * as TRANSITIONS from './Modal.transitions'

// Interface
import { IModal, IModalComponent } from './Modal.props'

// Styles
import { Content, Overlay, Wrapper } from './Modal.styles'

// Hooks
import { useLockedBody, useEventListener } from '../../hooks'

const Modal: React.FC<IModal> = ({ open, ...rest }) => {
  if (typeof window === 'undefined') return null

  const transition = useTransition(open, TRANSITIONS.center)

  return createPortal(
    transition(
      (style, item) =>
        item && <ModalComponent {...rest} open={open} animationStyle={style} />,
    ),
    window.document.body,
  )
}

export default Modal

const ModalComponent: React.FC<IModalComponent> = ({
  animationStyle,
  children,
  closeOnOverlayClick = true,
  closeOnEsc = true,
  maxWidth = '700px',
  open,
  preventScroll = true,
  onClose,
}) => {
  useLockedBody(preventScroll)

  if (closeOnEsc && onClose) {
    const handleCloseOnEsc = (event: KeyboardEvent) => {
      if (event.isTrusted && event.code === 'Escape') {
        onClose()
      }
    }

    useEventListener('keyup', handleCloseOnEsc)
  }

  const contentAnimation = useTransition(open, TRANSITIONS.center)

  return (
    <Wrapper role="dialog">
      <Overlay
        style={animationStyle}
        onClick={closeOnOverlayClick ? onClose : () => undefined}
      />

      {contentAnimation(
        (style, item) =>
          item && (
            <Content style={style} $maxWidth={maxWidth}>
              {children}
            </Content>
          ),
      )}
    </Wrapper>
  )
}
