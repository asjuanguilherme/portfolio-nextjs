import { skillCategories } from '@/data/skillCategories'
import { SkillData } from '@/data/types/SkillData'
import { Locale } from '@/i18n/locales'
import { css } from '@styled-system/css'
import { SkillList } from '../SkillList'

export type SkillsGroupedByCategoryProps = {
  items: SkillData[]
  locale: Locale
}

export const SkillsGroupedByCategory = ({
  items,
  locale
}: SkillsGroupedByCategoryProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: '2xl',
        lg: {
          gap: '2xl'
        }
      })}
    >
      {skillCategories.map(skillCategory => {
        const categorySkills = items.filter(
          skill => skill.category === skillCategory.name
        )

        if (categorySkills.length === 0) return

        return (
          <div key={skillCategory.name}>
            <h3
              className={css({
                fontSize: 'lg',
                fontWeight: 'medium',
                display: 'flex',
                alignItems: 'center',
                marginBottom: 'xl',

                _before: {
                  content: "''",
                  height: '4px',
                  width: '60px',
                  bg: 'primary.500',
                  marginRight: 'sm',
                  display: 'block'
                },

                lg: {
                  fontSize: '3xl'
                }
              })}
            >
              {skillCategory.translations[locale]}
            </h3>
            <SkillList items={categorySkills} />
          </div>
        )
      })}
    </div>
  )
}
