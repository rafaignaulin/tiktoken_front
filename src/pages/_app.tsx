import type { AppProps } from 'next/app'

import { store } from '../store'
import { GlobalStyle } from '../styles/globals'
import { Provider } from 'react-redux' 
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>

        <Header title='TikToken'></Header>
      
        <Component {...pageProps} />
        <GlobalStyle/>

        <Footer/>
      </Provider>
    </>
    )
}

export default MyApp
