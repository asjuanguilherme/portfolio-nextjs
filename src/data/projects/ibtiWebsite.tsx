import { skillsData } from '../skills'

export const ibtiWebsiteProject = {
  type: 'Website',
  slug: 'ibtiWebsite',
  title: 'IBTI Soluções em TI',
  images: [
    '/assets/images/projects/ibtiWebsite/images/1.png',
    '/assets/images/projects/ibtiWebsite/images/2.png',
    '/assets/images/projects/ibtiWebsite/images/3.png',
    '/assets/images/projects/ibtiWebsite/images/4.png',
    '/assets/images/projects/ibtiWebsite/images/5.png'
  ],
  cardImage: '/assets/images/projects/ibtiWebsite/card.png',
  liveUrl: 'https://ibti.tech',
  skills: [
    skillsData.styledComponents,
    skillsData.tailwindCSS,
    skillsData.seo,
    skillsData.uxUiDesign,
    skillsData.wordpress,
    skillsData.php,
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
        O site da IBTI Soluções passou por uma renovação significativa,
        utilizando o framework Next.js no frontend e o CMS Strapi. Assumi um
        papel central na construção e evolução desse projeto, que inicialmente
        estava inacabado e apresentava problemas de usabilidade, desempenho e
        outros aspectos a serem aprimorados.
      </p>

      <p>
        Como principal responsável, trabalhei ativamente na resolução dessas
        questões, propondo e implementando mudanças em diversos aspectos, desde
        a estrutura até a interface final do site. Um dos destaques é a
        capacidade de criar páginas com seções totalmente dinâmicas, o que
        proporciona uma experiência personalizada para os visitantes.
      </p>

      <p>
        Além disso, o site foi desenvolvido com suporte à internacionalização,
        com conteúdo disponível em inglês e português, e também oferece opções
        de modo claro e escuro, garantindo uma experiência visual adaptável às
        preferências dos usuários.
      </p>

      <p>
        Ao longo do processo de desenvolvimento, meu objetivo principal foi
        otimizar a usabilidade, a performance e a experiência geral do site da
        IBTI Soluções. Com as melhorias implementadas, agora ele oferece uma
        navegação mais intuitiva, carregamento rápido de páginas e um design
        atraente, refletindo a identidade e os valores da empresa de forma
        eficaz.
      </p>
    </>
  )
}
