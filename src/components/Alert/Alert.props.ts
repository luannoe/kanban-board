export type Variant = 'primary' | 'success' | 'warning' | 'error'

export interface IAlert {
  id?: string
  description: string
  duration?: number
  showClose?: boolean
  title?: string
  variant?: Variant
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  onClose?: (event?: React.MouseEvent<HTMLButtonElement>) => void
}
