import { skillsData } from 'data/skills'

export const anesgWebsiteProject = {
  type: 'Website',
  slug: 'anesgWebsite',
  title: 'ANESG',
  images: [
    '/assets/images/projects/anesgWebsite/images/1.png',
    '/assets/images/projects/anesgWebsite/images/2.png',
    '/assets/images/projects/anesgWebsite/images/3.png',
    '/assets/images/projects/anesgWebsite/images/4.png'
  ],
  cardImage: '/assets/images/projects/anesgWebsite/card.png',
  liveUrl: 'https://anesg.org.br',
  skills: [
    skillsData.styledComponents,
    skillsData.tailwindCSS,
    skillsData.seo,
    skillsData.uxUiDesign,
    skillsData.git,
    skillsData.next,
    skillsData.react,
    skillsData.css3,
    skillsData.html5,
    skillsData.javascript,
    skillsData.typescript
  ],
  content: (
    <>
      <p>
        **OBS: O site se encontra em momento de inserção de conteúdo por parte
        do cliente.**
      </p>
      <p>
        O cliente tinha um site antigo, e precisou criar um novo. O cliente já
        contava com um backend do projeto, ficando por minha responsabilidade a
        criação da UI para comportar as necessidades do projeto e o
        desenvolvimento do frontend, além de integrá-lo com a API Rest
        existente. Desenvolvi o site em React usando Next para SSR.
      </p>
    </>
  )
}
