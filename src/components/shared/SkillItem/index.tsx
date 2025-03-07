import { SkillData } from '@/data/types/SkillData'
import { css } from '@styled-system/css'

export type SkillItemProps = {
  data: SkillData
}

export const SkillItem = ({ data }: SkillItemProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: 'xs'
      })}
    >
      <span
        className={css({
          fontSize: '3xl',
          lg: { fontSize: '4xl' }
        })}
      >
        <data.icon />
      </span>
      <span
        className={css({
          fontSize: 'lg',
          lg: { fontSize: 'xl' }
        })}
      >
        {data.title}
      </span>
    </div>
  )
}
export default SkillItem
