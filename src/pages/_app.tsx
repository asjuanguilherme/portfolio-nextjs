import { AppProps } from 'next/app'

// Styles
import 'styles/static/fonts.css'
import GlobalStyles from 'styles/GlobalStyles'
import { Theme } from 'styles/themes'

// Contexts
import { ThemeProvider } from 'contexts/ThemeContext'
import { ModalProvider } from 'contexts/ModalContext'
import { NavigationProvider } from 'contexts/NavigationContext'

// Components
import Layout from 'components/layout'

const App = ({ Component, pageProps }: AppProps<{ storedTheme: Theme }>) => {
  return (
    <ThemeProvider storedTheme={pageProps.storedTheme}>
      <GlobalStyles />
      <NavigationProvider>
        <ModalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ModalProvider>
      </NavigationProvider>
    </ThemeProvider>
  )
}

export default App
