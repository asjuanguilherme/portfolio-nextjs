import { ProfessionalExperienceData } from './types/ProfessionalExperience'

export const professionalExperiences: ProfessionalExperienceData[] = [
  {
    id: 0,
    company: 'IBTI IT Solutions',
    location: 'São Paulo, Brazil',
    startDate: '22/04/2022',
    endDate: '01/11/2024',
    translations: {
      pt: {
        title: 'Desenvolvedor de Software',
        description: `Liderei o desenvolvimento de projetos end-to-end com React/Next.js, desde a concepção até a entrega, impactando a performance e escalabilidade. Refatorei projetos internos, melhorando UI e experiência do usuário. Desenvolvi pacotes TypeScript e implementei testes unitários e automatizados, garantindo maior confiabilidade. Fui responsável pela criação e gestão de pipelines CI/CD, além de manter o sistema de design da empresa. Trabalhei também no desenvolvimento de React Native e backend com NestJS, liderando a criação de designs UX/UI, com wireframes e protótipos de alta fidelidade.`
      },
      nl: {
        title: 'Software Engineer',
        description: `Ik leidde de end-to-end ontwikkeling van projecten met React/Next.js, van concept tot implementatie, wat de prestaties en schaalbaarheid verbeterde. Ik refactoreerde interne projecten en verbeterde de UI en gebruikerservaring. Ik ontwikkelde TypeScript-pakketten en implementeerde unit- en geautomatiseerde tests. Ik was verantwoordelijk voor CI/CD-pijplijnen en het onderhouden van het design-systeem van het bedrijf. Daarnaast werkte ik aan React Native en backend-ontwikkeling met NestJS en leidde ik de creatie van UX/UI-ontwerpen.`
      },
      en: {
        title: 'Software Engineer',
        description: `I led the end-to-end development of projects with React/Next.js, from concept to deployment, improving performance and scalability. I refactored internal projects, enhancing UI and user experience. Developed TypeScript packages and implemented unit and automated tests for greater reliability. Managed CI/CD pipelines and maintained the company’s design system. Additionally, I worked on React Native development and backend with NestJS, leading the creation of UX/UI designs with wireframes and high-fidelity prototypes.`
      }
    }
  },
  {
    id: 1,
    company: 'Mix Internet',
    location: 'Natal, Brazil',
    startDate: '01/02/2021',
    endDate: '01/05/2022',
    translations: {
      pt: {
        title: 'Desenvolvedor Web',
        description: `Fui responsável por frontend com foco em WordPress, criando websites responsivos de alto desempenho. Desenvolvi boilerplates JavaScript/TypeScript e integrei APIs REST. Trabalhei na criação de temas personalizados para WordPress e fui responsável pela manutenção e otimização de projetos frontend. Criei wireframes de alta fidelidade no Figma e desenvolvi funcionalidades de React Native, além de atuar como UX/UI designer, garantindo interfaces intuitivas e de alta qualidade.`
      },
      nl: {
        title: 'Webontwikkelaar',
        description: `Ik was verantwoordelijk voor frontend-ontwikkeling met de nadruk op WordPress en React, en het bouwen van responsieve websites. Ik ontwikkelde JavaScript/TypeScript boilerplates en integreerde REST-API's. Ik werkte aan het creëren van aangepaste WordPress-thema's en optimaliseerde frontend-projecten. Ik maakte high-fidelity wireframes in Figma en ontwikkelde React Native-functies, en als UX/UI-ontwerper zorgde ik voor intuïtieve interfaces.`
      },
      en: {
        title: 'Web Developer',
        description: `I was responsible for frontend development with a focus on WordPress and React, building high-performance, fully responsive websites. Developed JavaScript/TypeScript boilerplates and integrated REST APIs. Worked on creating custom WordPress themes and maintained and optimized frontend projects. Created high-fidelity wireframes in Figma and developed React Native features, also serving as the UX/UI designer, ensuring intuitive, high-quality interfaces.`
      }
    }
  }
]
