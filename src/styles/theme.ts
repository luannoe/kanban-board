import { Theme } from './theme.model'

const theme: Theme = {
  breakpoints: {
    xs: 0,
    sm: 360,
    md: 768,
    lg: 1024,
    xl: 1440,
  },
  palette: {
    primary: {
      main: '#00D563',
      '50': '#E6FBF0',
      '100': '#96FAA7',
      '200': '#60F287',
      '400': '#39E578',
      '500': '#00D563',
      '600': '#00B767',
    },
    secondary: {
      main: '#00D563',
      '50': '#E6FBF0',
      '100': '#96FAA7',
      '200': '#60F287',
      '400': '#39E578',
      '500': '#00D563',
      '600': '#00B767',
    },
    neutral: {
      '50': '#FFFFFF',
      '100': '#F3F4F6',
      '200': '#D0D4DC',
      '300': '#A3AAB9',
      '400': '#505969',
      '500': '#090A0B',
    },
    status: {
      error: {
        main: '#FF455B',
        hover: '#BA1B23',
      },
      success: { main: '#50C309' },
      warning: { main: '#F9BF09' },
      focused: { main: '#B5CFFF' },
    },
  },
  borderRadius: {
    primary: 8,
    secondary: 0,
    tertiary: 16,
  },
  spacing: [0, 4, 8, 16, 24, 32, 40, 48, 56],
  shadow: {
    '100': '0px 2px 4px rgba(0, 0, 0, 0.08)',
    '200': '0px 4px 8px rgba(0, 0, 0, 0.08)',
    '300': '0px 8px 16px rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: 48,
      fontWeight: 600,
    },
    h2: {
      fontSize: 40,
      fontWeight: 600,
    },
    h3: {
      fontSize: 32,
      fontWeight: 600,
    },
    h4: {
      fontSize: 24,
      fontWeight: 600,
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
    },
    h6: {
      fontSize: 18,
      fontWeight: 600,
    },
    body: {
      fontSize: 18,
    },
    body2: {
      fontSize: 16,
    },
    body3: {
      fontSize: 14,
    },
    caption: {
      fontSize: 12,
    },
    caption2: {
      fontSize: 10,
    },
  },
  zIndex: {
    bottomNavigation: 1000,
    header: 1100,
    drawer: 1200,
    modal: 1300,
    notification: 1400,
    tooltip: 1500,
  },
}

export default theme
