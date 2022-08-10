import styled from '@emotion/styled'
import { css, Theme } from '@emotion/react'
import { ButtonVariant } from './Button.props'

const getVariant = (theme: Theme) => (variant: ButtonVariant) => {
  const aux = {
    primary: {
      background: theme.palette.primary.main,
      border: theme.palette.primary.main,
      color: theme.palette.neutral[50],
      backgroundHover: theme.palette.primary[600],
      borderHover: theme.palette.primary[600],
      colorHover: theme.palette.neutral[50],
      backgroundDisabled: theme.palette.neutral[100],
      borderDisabled: theme.palette.neutral[100],
      colorDisabled: theme.palette.neutral[300],
    },
    secondary: {
      background: 'transparent',
      border: theme.palette.primary.main,
      color: theme.palette.primary.main,
      backgroundHover: 'transparent',
      borderHover: theme.palette.primary[600],
      colorHover: theme.palette.primary[600],
      backgroundDisabled: theme.palette.neutral[100],
      borderDisabled: theme.palette.neutral[100],
      colorDisabled: theme.palette.neutral[300],
    },
    tertiary: {
      background: 'transparent',
      border: 'transparent',
      color: theme.palette.neutral[300],
      backgroundHover: 'transparent',
      borderHover: 'transparent',
      colorHover: theme.palette.primary[600],
      backgroundDisabled: 'transparent',
      borderDisabled: 'transparent',
      colorDisabled: theme.palette.neutral[200],
    },
  }
  return aux[variant]
}

type RootProps = {
  $variant: ButtonVariant
  $fullWidth?: boolean
}

const Root = styled.button<RootProps>(
  ({ theme, $variant = 'primary', $fullWidth = false }) => {
    const getDefinedVariant = getVariant(theme)

    return css`
      cursor: pointer;

      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      width: ${$fullWidth ? '100%' : 'auto'};
      padding: 8px 18px;
      border-radius: ${theme.borderRadius.primary}px;
      background: ${getDefinedVariant($variant).background};
      border: 2px solid ${getDefinedVariant($variant).border};
      color: ${getDefinedVariant($variant).color};
      font-size: ${theme.typography.body2.fontSize};
      transition: background-color 0.3s, border-color 0.3s, color 0.3s;

      &:hover {
        background: ${getDefinedVariant($variant).backgroundHover};
        border: 2px solid ${getDefinedVariant($variant).borderHover};
        color: ${getDefinedVariant($variant).colorHover};
      }

      &:focus {
        outline: 2px solid ${theme.palette.status.focused.main};
      }

      &:disabled {
        cursor: not-allowed;
        background: ${getDefinedVariant($variant).backgroundDisabled};
        border: 2px solid ${getDefinedVariant($variant).borderDisabled};
        color: ${getDefinedVariant($variant).colorDisabled};
      }
    `
  },
)

export default Root
