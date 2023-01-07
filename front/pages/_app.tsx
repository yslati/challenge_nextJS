import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from './provider/store'
import { SessionProvider } from "next-auth/react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store} >
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </SessionProvider>
  )
}
