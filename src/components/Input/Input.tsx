import React from 'react'

// Components
import { Typography } from '@components/Typography'

// Interfaces
import { IInput } from './Input.props'

// Styles
import Root from './Input.styles'

const Input: React.ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  {
    id,
    type = 'text',
    label,
    disabled = false,
    error = false,
    helperText,
    fullWidth,
    placeholder,
    ...rest
  },
  ref,
) => {
  return (
    <Root
      $disabled={disabled}
      $error={error}
      $fullWidth={fullWidth}
      $type={type}
    >
      {label && <label htmlFor={id}>{label}</label>}

      <div className="input-wrapper">
        <input
          id={id}
          ref={ref}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
        />
      </div>

      {helperText && (
        <Typography variant="caption2" className="helper-text">
          {helperText}
        </Typography>
      )}
    </Root>
  )
}

export default React.forwardRef(Input)
