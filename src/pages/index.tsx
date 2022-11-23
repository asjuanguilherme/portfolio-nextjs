import { GetServerSideProps } from 'next'
import { DEFAULT_THEME } from 'contexts/ThemeContext/utils'
import { PageProps } from 'types/pageProps'
import { Theme } from 'styles/themes'

// Services
import { getSkills, GetSkillsResult } from 'services/cms.service'

// Components
import HomeMainSection from 'components/section/HomeMainSection'
import HomeAboutSection from 'components/section/HomeAboutSection'
import HomeProjectsSection from 'components/section/HomeProjectsSection'
import HomeTestimonialsSection from 'components/section/HomeTestimonialsSection'
import HomeContactSection from 'components/section/HomeContactSection'

type HomePageProps = PageProps<{
  skills: GetSkillsResult | null
}>

const HomePage = ({ skills }: HomePageProps) => {
  return (
    <>
      <HomeMainSection />
      <HomeAboutSection skills={skills} />
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
      storedTheme,
      skills: await getSkills()
    }
  }
}
