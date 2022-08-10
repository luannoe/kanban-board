import { ElementType, HTMLAttributes } from 'react'

export type TypographyAlign = 'center' | 'justify' | 'left' | 'right'

export type TypographyColor =
  | 'primary'
  | 'secondary'
  | 'dark'
  | 'light'
  | 'lighter'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'body2'
  | 'body3'
  | 'caption'
  | 'caption2'

type AllowedTags =
  | 'strong'
  | 'span'
  | 'div'
  | 'p'
  | 'em'
  | 'label'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'

// type AllowedComponents = typeof Button;

// export type TypographyAs = AllowedTags | AllowedComponents
export type TypographyAs = AllowedTags

export interface TypographyProps extends HTMLAttributes<HTMLSpanElement> {
  align?: TypographyAlign
  bold?: boolean
  color?: TypographyColor
  gutterBottom?: boolean
  italic?: boolean
  noWrap?: boolean
  tag?: ElementType
  variant?: TypographyVariant
}
