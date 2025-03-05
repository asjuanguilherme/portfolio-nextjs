import AboutSection from '@/components/pages/home/AboutSection'
import HomeHeroSection from '@/components/pages/home/HeroSection'
import ServicesSection from '@/components/pages/home/ServicesSection'
import TaglineSection from '@/components/pages/home/TaglineSection'

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <TaglineSection />
      <AboutSection />
      <ServicesSection />
    </>
  )
}
