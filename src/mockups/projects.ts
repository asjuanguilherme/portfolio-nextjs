import { ProjectCardProps } from './../components/shared/ProjectCard/index'

const projectsMockup = {
  id: 0,
  title: 'Project Item',
  category: 'WebSite',
  tags: [
    'Next.JS',
    'React.JS',
    'Wordpress',
    'API Rest',
    'Styled Components',
    'Seo'
  ],
  image: { url: '/assets/images/image-placeholder.png', alt: '' }
}

const projectsListMockup: (ProjectCardProps & { id: number })[] = []

for (let i = 0; i <= 14; i++) {
  projectsListMockup.push({ ...projectsMockup, id: i })
}

export default projectsListMockup
