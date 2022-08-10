import React from 'react'

// Interfaces
import { IButton } from './Button.props'

// Styles
import Root from './Button.styles'

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, IButton> = (
  { children, disabled, fullWidth, variant = 'primary', ...rest },
  ref,
) => (
  <Root ref={ref} $fullWidth={fullWidth} $variant={variant} {...rest}>
    {children}
  </Root>
)

export default React.forwardRef(Button)
