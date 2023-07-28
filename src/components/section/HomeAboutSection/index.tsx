import * as S from './styles'
import { useContext, useEffect, useRef } from 'react'

// Data
import { skillsData } from 'data/skills'

// Contexts
import { NavigationContext } from 'contexts/NavigationContext'

// Components
import SectionAnchor from 'components/shared/SectionAnchor'
import { SectionHeading, SectionWrapper } from 'components/shared/Section'
import Container from 'components/shared/Container'
import Button from 'components/shared/Button'
import Skill from 'components/shared/Skill'
import CurriculumPaperIcon from 'components/shared/Icons/CurriculumPaper'

const HomeAboutSection = () => {
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
      <S.Box layer={1}>
        <SectionWrapper as="div" layer={1}>
          <SectionHeading>Quem sou eu?</SectionHeading>
          <p>
            Sou natural de Natal - RN e com 21 anos de idade, sou apaixonado por
            desenvolvimento frontend e estou comprometido no papel de entregar
            soluções de alta qualidade nos projetos em que me comprometo.
          </p>

          <p>
            Com foco na experiencia do usuário, desenvolvo interfaces elegantes,
            responsivas, animadas e eficientes, para que seus usuários possam
            acessar seu site de qualquer lugar.
          </p>

          <p>
            Assim como Don Juan conquistava terras, eu conquisto usuários pixel
            a pixel!
          </p>

          <p>
            Empenho-me em atender as necessidades do cliente, buscando oferecer
            a melhor solução pro seu projeto.
          </p>

          <p>
            Sempre procuro me manter atualizado sobre as últimas tendências e
            melhores práticas no desenvolvimento frontend. Isso inclui estar por
            dentro de frameworks modernos e ferramentas que ajudam a tornar o
            processo de desenvolvimento mais eficiente e profissional.
          </p>

          <p>
            Se você está procurando um desenvolvedor frontend dedicado, estou
            pronto para trabalhar com você. Vamos criar interfaces incríveis.
            Estarei honrado em contribuir com o sucesso do seu projeto!
          </p>
          <Button
            icon={CurriculumPaperIcon}
            href="/assets/docs/curriculo.pdf"
            isExternal
            download
          >
            Ver Currículo
          </Button>
        </SectionWrapper>
        <SectionWrapper as="div" style={{ paddingTop: 0 }} layer={1}>
          <SectionHeading>Minhas Habilidades</SectionHeading>
          <S.SkillList>
            {Object.keys(skillsData).map(skillName => {
              const props = skillsData[skillName as 'next']

              return (
                <li key={skillName}>
                  <Skill {...props} />
                </li>
              )
            })}
          </S.SkillList>
        </SectionWrapper>
      </S.Box>
    </Container>
  )
}

export default HomeAboutSection
