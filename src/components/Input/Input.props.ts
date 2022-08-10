import { InputHTMLAttributes, ReactNode } from 'react'

export type InputType =
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'hidden'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean
  error?: boolean
  fullWidth?: boolean
  helperText?: string
  icon?: string | ReactNode
  label?: string
  type?: InputType
}
