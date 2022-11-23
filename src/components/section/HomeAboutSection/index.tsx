import * as S from './styles'

// Types
import { GetSkillsResult } from 'services/cms.service'

// Components
import SectionAnchor from 'components/shared/SectionAnchor'
import { SectionHeading, SectionWrapper } from 'components/shared/Section'
import Container from 'components/shared/Container'
import { CurriculumPaper } from 'components/shared/Icons'
import Button from 'components/shared/Button'
import Skill from 'components/shared/Skill'

export type HomeAboutSectionProps = {
  skills: GetSkillsResult | null
}

const boxLayer = 1

const HomeAboutSection = ({ skills }: HomeAboutSectionProps) => {
  return (
    <Container as="section">
      <SectionAnchor name="about" />
      <S.Box layer={boxLayer}>
        <SectionWrapper as="div" layer={boxLayer}>
          <SectionHeading>Quem sou eu?</SectionHeading>
          <p>
            Sou natural de Natal - RN, tenho 21 anos e sou um desenvolvedor web
            frontend! Desde que iniciei as minhas aventuras no mundo da
            programação, há mais ou menos 3 anos, venho me dedicando e sempre me
            aperfeiçoando para realizar minhas entregas com qualidade e sempre
            contribuir no que for preciso. Sou curioso e motivado a conhecer
            cada vez mais sobre novas tecnologias técnicas e ferramentas para me
            apromiorar cada vez mais.
          </p>
          <Button icon={CurriculumPaper} href="/curriculo">
            Ver Currículo
          </Button>
        </SectionWrapper>
        <SectionWrapper as="div" style={{ paddingTop: 0 }} layer={boxLayer}>
          <SectionHeading>Minhas Habilidades</SectionHeading>
          <S.SkillList>
            {skills?.data.map(skill => (
              <li key={skill.id}>
                <Skill
                  {...skill}
                  icon={
                    skill.attributes.icon.data && {
                      viewBox: skill.attributes.icon.data?.attributes.viewbox,
                      svgContent:
                        skill.attributes.icon.data?.attributes.svgLight
                    }
                  }
                  title={skill.attributes.title}
                  hoverColor={skill.attributes.color}
                />
              </li>
            ))}
          </S.SkillList>
        </SectionWrapper>
      </S.Box>
    </Container>
  )
}

export default HomeAboutSection
