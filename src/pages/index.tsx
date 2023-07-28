import { GetServerSideProps } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { DEFAULT_THEME } from 'contexts/ThemeContext/utils'
import { PageProps } from 'types/pageProps'
import { Theme } from 'styles/themes'
import { useContext } from 'react'

// Context
import { NavigationContext } from 'contexts/NavigationContext'
import { navigationItems } from 'contexts/NavigationContext/navigationItems'

import SeoMetaTags from 'components/infra/SeoMetaTags'

// Components
const HomeMainSection = dynamic(
  () => import('components/section/HomeMainSection')
)
const HomeAboutSection = dynamic(
  () => import('components/section/HomeAboutSection')
)
const HomeProjectsSection = dynamic(
  () => import('components/section/HomeProjectsSection')
)
const HomeTestimonialsSection = dynamic(
  () => import('components/section/HomeTestimonialsSection')
)
const HomeContactSection = dynamic(
  () => import('components/section/HomeContactSection')
)

type HomePageProps = PageProps<{}>

const HomePage = ({}: HomePageProps) => {
  const { activeSection } = useContext(NavigationContext)

  return (
    <>
      <Head>
        <SeoMetaTags
          title="Inicio"
          description="Portfolio de Juan Guilherme, desenvolvedor frontend. Venha conferir meu trabalho."
          pathname="/"
          image="/assets/images/juan.png"
        />
        <title>Juan | {navigationItems[activeSection]}</title>
      </Head>
      <HomeMainSection />
      <HomeAboutSection />
      <HomeProjectsSection />
      <HomeTestimonialsSection />
      <HomeContactSection />
    </>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps<HomePageProps> = async ({
  req
}) => {
  const storedTheme = (req.cookies.APP_THEME as Theme) || DEFAULT_THEME

  return {
    props: {
      storedTheme
    }
  }
}
