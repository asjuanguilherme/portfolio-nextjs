import * as S from './styles'
import { useContext, useEffect, useRef } from 'react'

// Types
import { GetSkillsResult } from 'services/cms/queries/getSkills'
import { GetAboutSectionResult } from 'services/cms/queries/getAboutSection'

// Contexts
import { NavigationContext } from 'contexts/NavigationContext'

// Components
import Markdown from 'markdown-to-jsx'
import SectionAnchor from 'components/shared/SectionAnchor'
import { SectionHeading, SectionWrapper } from 'components/shared/Section'
import Container from 'components/shared/Container'
import { CurriculumPaper } from 'components/shared/Icons'
import Button from 'components/shared/Button'
import Skill from 'components/shared/Skill'

export type HomeAboutSectionProps = {
  skills: GetSkillsResult | null
  data: GetAboutSectionResult | null
}

const boxLayer = 1

const HomeAboutSection = ({ data, skills }: HomeAboutSectionProps) => {
  const { setActiveSection } = useContext(NavigationContext)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    try {
      const intersectionObserver = new IntersectionObserver(
        (entries: any) =>
          entries.some((entry: any) => entry.isIntersecting) &&
          setActiveSection('about'),
        { threshold: 1 }
      )
      intersectionObserver.observe(sectionRef.current as any)

      return () => intersectionObserver.disconnect()
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <Container as="section" ref={sectionRef}>
      <SectionAnchor name="about" />
      <S.Box layer={boxLayer}>
        <SectionWrapper as="div" layer={boxLayer}>
          <SectionHeading>{data?.data?.attributes.title}</SectionHeading>
          <Markdown>{data?.data?.attributes.content || ''}</Markdown>
          <Button icon={CurriculumPaper} href="/curriculo">
            Ver Currículo
          </Button>
        </SectionWrapper>
        <SectionWrapper as="div" style={{ paddingTop: 0 }} layer={boxLayer}>
          <SectionHeading>{data?.data?.attributes.skillsTitle}</SectionHeading>
          <S.SkillList>
            {skills?.data?.map(skill => (
              <li key={skill.id}>
                <Skill {...skill.attributes} />
              </li>
            ))}
          </S.SkillList>
        </SectionWrapper>
      </S.Box>
    </Container>
  )
}

export default HomeAboutSection
