import { GetServerSideProps } from 'next'
import { DEFAULT_THEME } from 'contexts/ThemeContext/utils'
import { PageProps } from 'types/pageProps'
import { Theme } from 'styles/themes'

// Components
import HomeMainSection from 'components/section/HomeMainSection'
import HomeAboutSection from 'components/section/HomeAboutSection'
import HomeProjectsSection from 'components/section/HomeProjectsSection'
import HomeTestimonialsSection from 'components/section/HomeTestimonialsSection'
import HomeContactSection from 'components/section/HomeContactSection'

type HomePageProps = PageProps<{}>

const HomePage = ({}: HomePageProps) => {
  return (
    <>
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
