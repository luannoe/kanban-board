export type BorderRadius = {
  primary: number
  secondary: number
  tertiary: number
}

export type Shadow = {
  '100': string
  '200': string
  '300': string
}

export type Palette = {
  primary: {
    main: string
    '50': string
    '100': string
    '200': string
    '400': string
    '500': string
    '600': string
  }
  secondary: {
    main: string
    '50': string
    '100': string
    '200': string
    '400': string
    '500': string
    '600': string
  }
  neutral: {
    '50': string
    '100': string
    '200': string
    '300': string
    '400': string
    '500': string
  }
  status: {
    error: {
      main: string
      hover: string
    }
    success: {
      main: string
    }
    warning: {
      main: string
    }
    focused: {
      main: string
    }
  }
}

export type Theme = {
  breakpoints: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
  }
  palette: Palette
  borderRadius: BorderRadius
  spacing: number[]
  shadow: Shadow
  typography: {
    fontFamily: string
    fontSize: number
    fontWeightLight: number
    fontWeightRegular: number
    fontWeightMedium: number
    fontWeightBold: number
    h1: {
      fontSize: number
      fontWeight: number
    }
    h2: {
      fontSize: number
      fontWeight: number
    }
    h3: {
      fontSize: number
      fontWeight: number
    }
    h4: {
      fontSize: number
      fontWeight: number
    }
    h5: {
      fontSize: number
      fontWeight: number
    }
    h6: {
      fontSize: number
      fontWeight: number
    }
    body: {
      fontSize: number
    }
    body2: {
      fontSize: number
    }
    body3: {
      fontSize: number
    }
    caption: {
      fontSize: number
    }
    caption2: {
      fontSize: number
    }
  }
  zIndex: {
    bottomNavigation: 1000
    header: 1100
    drawer: 1200
    modal: 1300
    notification: 1400
    tooltip: 1500
  }
}
