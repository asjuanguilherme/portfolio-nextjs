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
import getMainSection, {
  GetMainSectionResult
} from 'services/cms/queries/getMainSection'
import getProjects, {
  GetProjectsResult
} from 'services/cms/queries/getProjects'
import getTestimonials, {
  GetTestimonialsResult
} from 'services/cms/queries/getTestimonials'

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
  mainSection: GetMainSectionResult | null
  aboutSection: GetAboutSectionResult | null
  skills: GetSkillsResult | null
  socials: GetSocialsResult | null
  projects: GetProjectsResult | null
  testimonials: GetTestimonialsResult | null
}>

const HomePage = ({
  mainSection,
  aboutSection,
  skills,
  socials,
  projects,
  testimonials
}: HomePageProps) => {
  return (
    <>
      <HomeMainSection data={mainSection} socials={socials} />
      <HomeAboutSection data={aboutSection} skills={skills} />
      <HomeProjectsSection projects={projects} />
      <HomeTestimonialsSection testimonials={testimonials} />
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
      mainSection: await getMainSection(),
      aboutSection: await getAboutSection(),
      skills: await getSkills(),
      projects: await getProjects(),
      testimonials: await getTestimonials()
    }
  }
}
