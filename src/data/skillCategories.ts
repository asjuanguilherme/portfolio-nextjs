import { SkillCategoryData } from './types/SkillData'

export enum SkillCategoriesEnum {
  frontend,
  backend,
  tools
}

export const skillCategories: SkillCategoryData[] = [
  {
    name: SkillCategoriesEnum.frontend,
    translations: {
      pt: 'Frontend',
      en: 'Frontend',
      nl: 'Frontend'
    }
  },
  {
    name: SkillCategoriesEnum.backend,
    translations: {
      pt: 'Backend',
      en: 'Backend',
      nl: 'Backend'
    }
  },
  {
    name: SkillCategoriesEnum.tools,
    translations: {
      pt: 'Ferramentas',
      en: 'Tools',
      nl: 'Tools'
    }
  }
]
