import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import { DEFAULT_THEME } from 'contexts/ThemeContext/utils'
import { PageProps } from 'types/pageProps'
import { Theme } from 'styles/themes'

// Services
import { getSkills, GetSkillsResult } from 'services/cms/queries/getSkills'
import getAboutSection, {
  GetAboutSectionResult
} from 'services/cms/queries/getAboutSection'

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
  aboutSection: GetAboutSectionResult | null
  skills: GetSkillsResult | null
}>

const HomePage = ({ aboutSection, skills }: HomePageProps) => {
  return (
    <>
      <HomeMainSection />
      <HomeAboutSection data={aboutSection} skills={skills} />
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
      aboutSection: await getAboutSection(),
      skills: await getSkills()
    }
  }
}
