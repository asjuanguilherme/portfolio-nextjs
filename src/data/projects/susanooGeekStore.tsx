import { skillsData } from 'data/skills'

export const susanooGeekStoreProject = {
  type: 'WebSite - Loja Virtual',
  slug: 'susanooGeekStore',
  title: 'Susanoo Geek',
  images: [
    '/assets/images/projects/susanooGeekStore/images/1.png',
    '/assets/images/projects/susanooGeekStore/images/2.png',
    '/assets/images/projects/susanooGeekStore/images/3.png',
    '/assets/images/projects/susanooGeekStore/images/4.png',
    '/assets/images/projects/susanooGeekStore/images/5.png'
  ],
  cardImage: '/assets/images/projects/susanooGeekStore/card.png',
  liveUrl: 'https://susanoogeek.com',
  skills: [
    skillsData.uxUiDesign,
    skillsData.next,
    skillsData.react,
    skillsData.wordpress,
    skillsData.styledComponents,
    skillsData.javascript,
    skillsData.typescript,
    skillsData.seo,
    skillsData.php,
    skillsData.git,
    skillsData.css3,
    skillsData.html5
  ],
  content: (
    <>
      <p>
        Neste projeto, desenvolvi a loja virtual <b>Susanoo Geek</b>,
        especializada em camisetas exclusivas de animes.
      </p>

      <p>
        Combinando o WooCommerce com um frontend refinado em Next.js
        desenvolvido sob medida, criei uma plataforma que oferece aos usuários
        uma experiência de compra excepcional. Enfatizando animações fluidas e
        uma interface refinada, cada detalhe foi cuidadosamente projetado para
        proporcionar uma jornada de compra envolvente e única.
      </p>

      <p>
        A <b>Susanoo Geek</b> destaca-se por sua estética elegante e interativa,
        tornando-se o destino perfeito para fãs de animes em busca de produtos
        exclusivos e de alta qualidade.
      </p>
    </>
  )
}
