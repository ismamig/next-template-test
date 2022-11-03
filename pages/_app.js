import '../styles/globals.css'
import Layout from "../components/Layout";
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { pageProps, session } }) {
  const getLayout = Component.getLayout || ((page) => page)
  
  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  )
}

export default MyApp
