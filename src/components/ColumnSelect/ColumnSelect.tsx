import React from 'react'

// Data
import columns from 'data/consts/columns'

// Interfaces
import { IColumnSelect } from './ColumnSelect.props'

// Styles
import Root from './ColumnSelect.styles'
import { IColumnType } from '@components/Column/Column.props'

const ColumnSelect: React.FC<IColumnSelect> = ({ value, onChange }) => {
  return (
    <Root value={value}>
      <select
        value={value}
        onChange={e => onChange(e.target.value as IColumnType)}
      >
        {columns.map(column => (
          <option key={column} value={column}>
            {column}
          </option>
        ))}
      </select>
    </Root>
  )
}

export default ColumnSelect
