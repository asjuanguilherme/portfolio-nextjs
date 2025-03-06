import AboutSection from '@/components/pages/home/AboutSection'
import ExpertisesSection from '@/components/pages/home/ExpertisesSection'
import HomeHeroSection from '@/components/pages/home/HeroSection'
import ProfessionalExperiencesSection from '@/components/pages/home/ProfessionalExperiencesSection'
import ServicesSection from '@/components/pages/home/ServicesSection'
import TaglineSection from '@/components/pages/home/TaglineSection'

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <TaglineSection />
      <AboutSection />
      <ServicesSection />
      <ExpertisesSection />
      <ProfessionalExperiencesSection />
    </>
  )
}
