export interface IModalCard {
  open: boolean
  id?: string
  title?: string
  description?: string
  column: 'To Do' | 'Doing' | 'Done'
  onClose: () => void
}
