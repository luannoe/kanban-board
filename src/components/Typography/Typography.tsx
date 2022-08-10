import React from 'react'

// Interfaces
import { TypographyProps } from './Typography.props'

// Styles
import { Root } from './Typography.styles'

// Utils
import { getTypographyVariantComponent } from './Typography.utils'

type Props = React.PropsWithChildren<TypographyProps>

const Typography: React.FC<Props> = ({
  children,
  align = 'left',
  bold = false,
  color = 'dark',
  gutterBottom = false,
  italic = false,
  noWrap = false,
  variant = 'body2',
  tag,
  ...rest
}) => (
  <Root
    as={tag || getTypographyVariantComponent(variant)}
    $align={align}
    $bold={bold}
    $color={color}
    $gutterBottom={gutterBottom}
    $italic={italic}
    $noWrap={noWrap}
    $variant={variant}
    {...rest}
  >
    {children}
  </Root>
)

Typography.displayName = 'Typography'

export default Typography
