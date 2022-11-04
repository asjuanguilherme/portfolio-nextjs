import type { AppProps } from 'next/app'
import Layout from 'components/layout'
import { ThemeProvider } from 'contexts/ThemeProvider'

// Styles
import 'styles/static/fonts.css'
import GlobalStyles from 'styles/GlobalStyles'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
