import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import { DEFAULT_THEME } from 'contexts/ThemeContext/utils'
import { PageProps } from 'types/pageProps'
import { Theme } from 'styles/themes'

// Services
import { getSkills, GetSkillsResult } from 'services/cms.service'

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
