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
    name: 'react',
    category: SkillCategoriesEnum.frontend,
    title: 'React.js',
    icon: ReactJSColoredIcon
  },
  next: {
    name: 'next',
    category: SkillCategoriesEnum.frontend,
    title: 'Next.js',
    icon: NextJSColoredIcon
  },
  javascript: {
    name: 'javascript',
    category: SkillCategoriesEnum.frontend,
    title: 'JavaScript',
    icon: JavascriptColoredIcon
  },
  typescript: {
    name: 'typescript',
    category: SkillCategoriesEnum.frontend,
    title: 'TypeScript',
    icon: TypescriptColoredIcon
  },
  tailwindCSS: {
    name: 'tailwind',
    category: SkillCategoriesEnum.frontend,
    title: 'Tailwind CSS',
    icon: TailwindColoredIcon
  },
  redux: {
    name: 'redux',
    category: SkillCategoriesEnum.frontend,
    title: 'Redux',
    icon: ReduxColoredIcon
  },
  reactQuery: {
    name: 'react-query',
    category: SkillCategoriesEnum.frontend,
    title: 'React Query',
    icon: ReactQueryColoredIcon
  },
  pandaCSS: {
    name: 'pandacss',
    category: SkillCategoriesEnum.frontend,
    title: 'Panda CSS',
    icon: PandaCSSColoredIcon
  },
  styledComponents: {
    name: 'styled',
    category: SkillCategoriesEnum.frontend,
    title: 'Styled Components',
    icon: () => '<💅>'
  },
  sass: {
    name: 'sass',
    category: SkillCategoriesEnum.frontend,
    title: 'Sass',
    icon: SassColoredIcon
  },
  node: {
    name: 'node',
    category: SkillCategoriesEnum.backend,
    title: 'Node.js',
    icon: NodeJSColoredIcon
  },
  nestjs: {
    name: 'nestjs',
    category: SkillCategoriesEnum.backend,
    title: 'NestJS',
    icon: NestJSColoredIcon
  },
  postgres: {
    name: 'postgres',
    category: SkillCategoriesEnum.backend,
    title: 'Postgres',
    icon: PostgresColoredIcon
  },
  prisma: {
    name: 'prisma',
    category: SkillCategoriesEnum.backend,
    title: 'Prisma ORM',
    icon: PrismaColoredIcon
  },
  git: {
    name: 'git',
    category: SkillCategoriesEnum.tools,
    title: 'Git',
    icon: GitColoredIcon
  },
  docker: {
    name: 'docker',
    category: SkillCategoriesEnum.tools,
    title: 'Docker',
    icon: DockerColoredIcon
  },
  figma: {
    name: 'figma',
    category: SkillCategoriesEnum.tools,
    title: 'Figma',
    icon: FigmaColoredIcon
  }
}

export const skillsList = Object.values(skills)
