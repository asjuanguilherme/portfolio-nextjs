import type { AppProps } from 'next/app'
import Layout from 'components/layout'

// Styles
import 'styles/static/fonts.css'
import GlobalStyles from 'styles/GlobalStyles'

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
