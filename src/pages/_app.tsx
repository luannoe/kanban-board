import React from 'react'
import createCache from '@emotion/cache'
import { CacheProvider, Global } from '@emotion/react'

// Styles
import reset from '@styles/reset'
import global from '@styles/global'

// Providers
import Theme from '@providers/theme'
import { NotificationProvider } from 'hooks/useNotification'

// Interfaces
import type { AppProps } from 'next/app'

const createEmotionCache = () => {
  return createCache({ key: 'css' })
}

const clientSideEmotionCache = createEmotionCache()

function MyApp({
  emotionCache = clientSideEmotionCache,
  Component,
  pageProps,
}: AppProps & { emotionCache: any }) {
  return (
    <CacheProvider value={emotionCache}>
      <Theme>
        <NotificationProvider position="bottom-start">
          <Global styles={reset} />
          <Global styles={global} />
          <Component {...pageProps} />
        </NotificationProvider>
      </Theme>
    </CacheProvider>
  )
}

export default MyApp
