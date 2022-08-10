import { ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

export type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean
  fullWidth?: boolean
  variant?: ButtonVariant
}
