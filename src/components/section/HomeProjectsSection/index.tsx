import * as S from './styles'
import { SectionHeading, SectionWrapper } from 'components/shared/Section'
import Container from 'components/shared/Container'
import projectsListMockup from 'mockups/projects'
import ProjectCard from 'components/shared/ProjectCard'

export type HomeProjectsSectionProps = {}

const HomeProjectsSection = ({}: HomeProjectsSectionProps) => {
  return (
    <SectionWrapper id="#projects">
      <Container>
        <SectionHeading>Ultimos Projetos</SectionHeading>
        <S.ProjectsGrid>
          {projectsListMockup.map(project => (
            <li key={project.id}>
              <ProjectCard {...project} layer={1} />
            </li>
          ))}
        </S.ProjectsGrid>
      </Container>
    </SectionWrapper>
  )
}

export default HomeProjectsSection
