import type { AppProps } from 'next/app'
import GlobalStyles from 'styles/GlobalStyles'
import Layout from 'components/layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
