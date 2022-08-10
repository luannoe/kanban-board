import { IColumnType } from '@components/Column/Column.props'

export interface IColumnSelect {
  value: IColumnType
  onChange: (value: IColumnType) => void
}
