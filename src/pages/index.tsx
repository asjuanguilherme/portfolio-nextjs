import { GetServerSideProps } from 'next'
import { DEFAULT_THEME } from 'contexts/ThemeContext/utils'

// Components
import HomeMainSection from 'components/section/HomeMainSection'
import HomeAboutSection from 'components/section/HomeAboutSection'
import HomeProjectsSection from 'components/section/HomeProjectsSection'
import HomeTestimonialsSection from 'components/section/HomeTestimonialsSection'
import HomeContactSection from 'components/section/HomeContactSection'

const HomePage = () => {
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const storedTheme = req.cookies.APP_THEME || DEFAULT_THEME

  return {
    props: {
      storedTheme
    }
  }
}
