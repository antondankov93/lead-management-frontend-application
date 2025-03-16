import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { persistor, store } from '@/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider {...{ store }}>
      <PersistGate {...{ persistor }}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
