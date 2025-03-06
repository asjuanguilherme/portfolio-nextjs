import { skills } from './skills'
import { ProjectData } from './types/ProjectData'

export const projects: ProjectData[] = [
  {
    id: 0,
    category: 'Website',
    slug: 'ibti-website',
    title: 'IBTI Soluções em TI',
    images: [
      { src: '/assets/images/projects/ibti-website/images/1.png', alt: '' },
      { src: '/assets/images/projects/ibti-website/images/2.png', alt: '' },
      { src: '/assets/images/projects/ibti-website/images/2.png', alt: '' },
      { src: '/assets/images/projects/ibti-website/images/2.png', alt: '' },
      { src: '/assets/images/projects/ibti-website/images/2.png', alt: '' }
    ],
    cardImage: '/assets/images/projects/ibti-website/card.png',
    href: 'https://ibti.tech',
    skills: [
      skills.next,
      skills.react,
      skills.styledComponents,
      skills.typescript
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
          questões, propondo e implementando mudanças em diversos aspectos,
          desde a estrutura até a interface final do site. Um dos destaques é a
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
  },
  {
    id: 1,
    category: 'Website',
    slug: 'tecindica',
    title: 'Tec Indica',
    images: [
      {
        src: '/assets/images/projects/tecindica-website/images/1.png',
        alt: ''
      },
      {
        src: '/assets/images/projects/tecindica-website/images/2.png',
        alt: ''
      },
      {
        src: '/assets/images/projects/tecindica-website/images/2.png',
        alt: ''
      },
      {
        src: '/assets/images/projects/tecindica-website/images/2.png',
        alt: ''
      },
      { src: '/assets/images/projects/tecindica-website/images/2.png', alt: '' }
    ],
    cardImage: '/assets/images/projects/tecindica-website/card.png',
    href: 'https://tecindica.com.br',
    skills: [
      skills.next,
      skills.react,
      skills.styledComponents,
      skills.tailwindCSS,
      skills.typescript
    ],
    content: (
      <>
        <p>
          O Tec Indica é um site especializado em redirecionamento de promoções.
          Desde o início, o projeto foi concebido para atender às necessidades
          exclusivas do cliente, começando pelo design da interface do usuário
          (UI). Inicialmente, o desenvolvimento foi realizado no WordPress,
          utilizando um tema personalizado baseado no roots sage. No entanto, à
          medida que as necessidades do cliente evoluíram, uma API foi
          desenvolvida e um frontend com React utilizando NextJS foi criado.
        </p>
        <p>
          Essa transição permitiu uma maior flexibilidade e capacidade de
          resposta para lidar com os requisitos em constante mudança. Com o uso
          do React e NextJS, pudemos construir uma experiência de usuário mais
          dinâmica, ágil e otimizada. A criação de uma API personalizada também
          proporcionou uma integração mais eficiente com outros sistemas e
          permitiu que o Tec Indica expandisse suas funcionalidades.
        </p>

        <p>
          A abordagem foi focada em oferecer um site personalizado, adaptável e
          eficiente, que atendesse às demandas do cliente e oferecesse uma
          experiência de usuário aprimorada. O resultado final é um Tec Indica
          moderno, que combina o poder do WordPress com a agilidade e desempenho
          do React e NextJS, proporcionando uma plataforma robusta para
          redirecionar e explorar promoções de forma fácil e conveniente.
        </p>
      </>
    )
  }
]
