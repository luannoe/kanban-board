import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Theme } from '@styles/theme.model'
import { IColumnSelect } from './ColumnSelect.props'

const getColor = (theme: Theme, value: 'To Do' | 'Doing' | 'Done') => {
  const hash = {
    'To Do': {
      background: theme.palette.neutral[200],
      color: theme.palette.neutral[500],
    },
    Doing: {
      background: theme.palette.status.warning.main,
      color: theme.palette.neutral[500],
    },
    Done: {
      background: theme.palette.status.success.main,
      color: theme.palette.neutral[50],
    },
  }

  return hash[value]
}

const Root = styled.div<Partial<IColumnSelect>>(
  ({ theme, value = 'To Do' }) => css`
    position: relative;
    border-radius: ${theme.borderRadius.primary}px;
    ${getColor(theme, value)};

    select {
      cursor: pointer;
      position: relative;
      z-index: 2;
      padding: ${theme.spacing[2]}px 0;
      padding-left: ${theme.spacing[3]}px;
      padding-right: ${theme.spacing[5]}px;
      border-radius: ${theme.borderRadius.primary}px;
      font-size: 14px;
      font-weight: 600;
    }

    &:before {
      content: '▼';
      z-index: 1;
      position: absolute;
      right: 14px;
      top: 10px;
      font-size: 12px;
      transform: scaleY(0.6);
      color: rgba(0, 0, 0, 0.3);
    }
  `,
)

export default Root
