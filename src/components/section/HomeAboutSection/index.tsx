import * as S from './styles'
import { SectionHeading, SectionWrapper } from 'components/shared/Section'
import Container from 'components/shared/Container'
import { CurriculumPaper } from 'components/shared/Icons'
import Button from 'components/shared/Button'
import Skill from 'components/shared/Skill'
import skillListMockup from 'mockups/skills'

export type HomeAboutSectionProps = {}

const HomeAboutSection = ({}: HomeAboutSectionProps) => {
  const layer = 2

  return (
    <Container as="section" id="#about">
      <S.Box layer={layer}>
        <SectionWrapper as="div" layer={layer}>
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
        <SectionWrapper as="div" style={{ paddingTop: 0 }} layer={layer}>
          <SectionHeading>Minhas Habilidades</SectionHeading>
          <S.SkillList>
            {skillListMockup.map(skill => (
              <li key={skill.id}>
                <Skill {...skill} />
              </li>
            ))}
          </S.SkillList>
        </SectionWrapper>
      </S.Box>
    </Container>
  )
}

export default HomeAboutSection
