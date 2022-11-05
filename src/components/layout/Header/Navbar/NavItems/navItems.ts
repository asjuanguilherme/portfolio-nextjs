export interface INavItem {
  title: string
  link: string
}

const navItems: INavItem[] = [
  { title: 'Início', link: '/' },
  { title: 'Sobre', link: '/#about' },
  { title: 'Projetos', link: '/#projetos' },
  { title: 'Testemunhos', link: '/#testimonials' },
  { title: 'Contato', link: '/#contact' }
]

export default navItems
