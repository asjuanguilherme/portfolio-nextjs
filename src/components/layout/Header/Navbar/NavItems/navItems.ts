export interface INavItem {
  title: string
  link: string
}

const navItems: INavItem[] = [
  { title: 'Início', link: '/' },
  { title: 'Sobre', link: '/#about' },
  { title: 'Habilidades', link: '/#skills' },
  { title: 'Testemunhos', link: '/#testimonials' },
  { title: 'Contato', link: '/#contact' }
]

export default navItems
