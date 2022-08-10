import { TypographyAs, TypographyVariant } from './Typography.props'

export const getTypographyVariantComponent = (
  variant?: TypographyVariant,
): TypographyAs => {
  switch (variant) {
    case 'body':
    case 'caption':
      return 'p'
    case 'h1':
      return 'h1'
    case 'h2':
      return 'h2'
    case 'h3':
      return 'h3'
    case 'h4':
      return 'h4'
    case 'h5':
      return 'h5'
    case 'h6':
      return 'h6'
    default:
      return 'span'
  }
}
