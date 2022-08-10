import React from 'react'
import { ThemeProvider } from '@emotion/react'

// Styles
import theme from '@styles/theme'

interface ITheme {
  children: React.ReactNode
}

const Theme: React.FC<ITheme> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
