import { skillsData } from 'data/skills'

export const tecindicaProject = {
  type: 'Website',
  slug: 'tecindica',
  title: 'Tec Indica',
  images: [
    '/assets/images/projects/tecindicaWebsite/images/1.png',
    '/assets/images/projects/tecindicaWebsite/images/2.png',
    '/assets/images/projects/tecindicaWebsite/images/3.png',
    '/assets/images/projects/tecindicaWebsite/images/4.png',
    '/assets/images/projects/tecindicaWebsite/images/5.png'
  ],
  cardImage: '/assets/images/projects/tecindicaWebsite/card.png',
  liveUrl: 'https://tecindica.com.br',
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
        O Tec Indica é um site especializado em redirecionamento de promoções.
        Desde o início, o projeto foi concebido para atender às necessidades
        exclusivas do cliente, começando pelo design da interface do usuário
        (UI). Inicialmente, o desenvolvimento foi realizado no WordPress,
        utilizando um tema personalizado baseado no roots sage. No entanto, à
        medida que as necessidades do cliente evoluíram, uma API foi
        desenvolvida e um frontend com React utilizando NextJS foi criado.
      </p>
      <p>
        Essa transição permitiu uma maior flexibilidade e capacidade de resposta
        para lidar com os requisitos em constante mudança. Com o uso do React e
        NextJS, pudemos construir uma experiência de usuário mais dinâmica, ágil
        e otimizada. A criação de uma API personalizada também proporcionou uma
        integração mais eficiente com outros sistemas e permitiu que o Tec
        Indica expandisse suas funcionalidades.
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
