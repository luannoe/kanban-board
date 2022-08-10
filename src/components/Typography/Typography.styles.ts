import styled from '@emotion/styled'
import { css, Theme } from '@emotion/react'

import {
  TypographyAlign,
  TypographyColor,
  TypographyVariant,
} from './Typography.props'

const getColor = (theme: Theme) => (color: TypographyColor) => {
  const hash = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    dark: theme.palette.neutral[500],
    light: theme.palette.neutral[400],
    lighter: theme.palette.neutral[300],
  }
  return hash[color]
}

const getVariant = (theme: Theme) => (variant: TypographyVariant) =>
  theme.typography[variant] || {}

type RootProps = {
  $align: TypographyAlign
  $bold: boolean
  $color: TypographyColor
  $gutterBottom: boolean
  $italic: boolean
  $noWrap: boolean
  $variant: TypographyVariant
}

export const Root = styled.span<RootProps>(
  ({
    theme,
    $align,
    $bold,
    $color,
    $gutterBottom,
    $italic,
    $noWrap,
    $variant,
  }) => {
    const getDefinedColor = getColor(theme)
    const getDefinedVariant = getVariant(theme)

    return css`
      color: ${getDefinedColor($color)};

      margin-bottom: ${$gutterBottom ? 0.35 : 0}em;

      font-family: ${theme.typography.fontFamily};
      font-weight: ${$bold ? 600 : 400};
      font-style: ${$italic ? 'italic' : 'normal'};
      text-align: ${$align};

      ${getDefinedVariant($variant)};

      ${$noWrap &&
      css`
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `}
    `
  },
)
