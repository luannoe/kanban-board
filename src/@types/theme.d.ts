import '@emotion/react'

import { Theme as AppTheme } from '../styles/theme.model'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends AppTheme {}
}
