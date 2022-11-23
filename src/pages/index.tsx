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
import getSocials, { GetSocialsResult } from 'services/cms/queries/getSocials'

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
  socials: GetSocialsResult | null
}>

const HomePage = ({ aboutSection, skills, socials }: HomePageProps) => {
  return (
    <>
      <HomeMainSection socials={socials} />
      <HomeAboutSection data={aboutSection} skills={skills} />
      <HomeProjectsSection />
      <HomeTestimonialsSection />
      <HomeContactSection socials={socials} />
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
      socials: await getSocials(),
      aboutSection: await getAboutSection(),
      skills: await getSkills()
    }
  }
}
