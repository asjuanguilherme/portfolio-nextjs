import { AppProps } from 'next/app'

// Styles
import 'styles/static/fonts.css'
import GlobalStyles from 'styles/GlobalStyles'
import themes from 'styles/themes'

// Components
import Layout from 'components/layout'
import { ThemeProvider } from 'contexts/ThemeContext'

const App = ({
  Component,
  pageProps
}: AppProps<{ storedTheme: keyof typeof themes }>) => {
  return (
    <ThemeProvider storedTheme={pageProps.storedTheme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
