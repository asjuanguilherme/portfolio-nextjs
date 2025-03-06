import { SkillData } from '@/data/types/SkillData'
import { css } from '@styled-system/css'
import SkillItem from '../SkillItem'

export type SkillListProps = {
  items: SkillData[]
}

export const SkillList = ({ items }: SkillListProps) => {
  return (
    <>
      <ul
        className={css({
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'xl',

          lg: {
            gap: 'xl'
          }
        })}
      >
        {items.map(skillData => {
          return (
            <li key={skillData.name}>
              <SkillItem data={skillData} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
