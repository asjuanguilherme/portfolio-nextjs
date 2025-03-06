import JavascriptColoredIcon from '@/components/icons/JavascriptColored'
import ReactJSColoredIcon from '@/components/icons/ReactJSColored'
import NextJSColoredIcon from '@/components/icons/NextJSColored'
import TypescriptColoredIcon from '@/components/icons/TypescriptColored'
import TailwindColoredIcon from '@/components/icons/TailwindColored'
import SassColoredIcon from '@/components/icons/SassColored'
import GitColoredIcon from '@/components/icons/GitColoredIcon'
import NodeJSColoredIcon from '@/components/icons/NodeJSColored'
import NestJSColoredIcon from '@/components/icons/NestJSColored'
import DockerColoredIcon from '@/components/icons/DockerColored'
import FigmaColoredIcon from '@/components/icons/FigmaColored'
import PostgresColoredIcon from '@/components/icons/PostgresColored'
import PrismaColoredIcon from '@/components/icons/PrismaColored'
import ReactQueryColoredIcon from '@/components/icons/ReactQueryColored'
import ReduxColoredIcon from '@/components/icons/ReduxColored'
import PandaCSSColoredIcon from '@/components/icons/PandaCSSColored'
import { SkillCategoriesEnum } from './skillCategories'
import { SkillData } from './types/SkillData'

export const skills: Record<string, SkillData> = {
  react: {
    category: SkillCategoriesEnum.frontend,
    title: 'React.js',
    icon: ReactJSColoredIcon
  },
  next: {
    category: SkillCategoriesEnum.frontend,
    title: 'Next.js',
    icon: NextJSColoredIcon
  },
  javascript: {
    category: SkillCategoriesEnum.frontend,
    title: 'JavaScript',
    icon: JavascriptColoredIcon
  },
  typescript: {
    category: SkillCategoriesEnum.frontend,
    title: 'TypeScript',
    icon: TypescriptColoredIcon
  },
  tailwindCSS: {
    category: SkillCategoriesEnum.frontend,
    title: 'Tailwind CSS',
    icon: TailwindColoredIcon
  },
  redux: {
    category: SkillCategoriesEnum.frontend,
    title: 'Redux',
    icon: ReduxColoredIcon
  },
  reactQuery: {
    category: SkillCategoriesEnum.frontend,
    title: 'React Query',
    icon: ReactQueryColoredIcon
  },
  pandaCSS: {
    category: SkillCategoriesEnum.frontend,
    title: 'Panda CSS',
    icon: PandaCSSColoredIcon
  },
  styledComponents: {
    category: SkillCategoriesEnum.frontend,
    title: 'Styled Components',
    icon: () => '<💅>'
  },
  sass: {
    category: SkillCategoriesEnum.frontend,
    title: 'Sass',
    icon: SassColoredIcon
  },
  node: {
    category: SkillCategoriesEnum.backend,
    title: 'Node.js',
    icon: NodeJSColoredIcon
  },
  nestjs: {
    category: SkillCategoriesEnum.backend,
    title: 'NestJS',
    icon: NestJSColoredIcon
  },
  postgres: {
    category: SkillCategoriesEnum.backend,
    title: 'Postgres',
    icon: PostgresColoredIcon
  },
  prisma: {
    category: SkillCategoriesEnum.backend,
    title: 'Prisma ORM',
    icon: PrismaColoredIcon
  },
  git: {
    category: SkillCategoriesEnum.tools,
    title: 'Git',
    icon: GitColoredIcon
  },
  docker: {
    category: SkillCategoriesEnum.tools,
    title: 'Docker',
    icon: DockerColoredIcon
  },
  figma: {
    category: SkillCategoriesEnum.tools,
    title: 'Figma',
    icon: FigmaColoredIcon
  }
}
