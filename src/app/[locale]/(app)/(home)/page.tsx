import AboutSection from './AboutSection'
import ExpertisesSection from './ExpertisesSection'
import HomeHeroSection from './HeroSection'
import ProfessionalExperiencesSection from './ProfessionalExperiencesSection'
import { ProjectsSection } from './ProjectsSection'
import ServicesSection from './ServicesSection'
import TaglineSection from './TaglineSection'

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <TaglineSection />
      <AboutSection />
      <ServicesSection />
      <ExpertisesSection />
      <ProfessionalExperiencesSection />
      <ProjectsSection />
    </>
  )
}
