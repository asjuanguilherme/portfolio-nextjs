import { ProfessionalExperienceData } from '@/data/types/ProfessionalExperience'
import { Locale } from '@/i18n/locales'
import { css } from '@styled-system/css'

export type ProfessionalExperienceItemProps = {
  data: ProfessionalExperienceData
  locale: Locale
}

export const ProfessionalExperienceItem = ({
  data,
  locale
}: ProfessionalExperienceItemProps) => {
  return (
    <div className={css({ display: 'flex' })}>
      <div
        className={css({
          lgDown: {
            display: 'none'
          },
          display: 'flex',
          flexDir: 'column',
          gap: 'md',
          width: '300px',
          flexShrink: 0
        })}
      >
        <span className={css({ fontWeight: 'bold', fontSize: 'xl' })}>
          {data.startDate} - {data.endDate}
        </span>
        <span>{data.company}</span>
        <span>{data.location}</span>
      </div>
      <div className={css({})}>
        <h3
          className={css({
            fontWeight: 'bold',
            fontSize: '2xl',
            lg: { fontSize: '3xl' }
          })}
        >
          {data.translations[locale].title}
        </h3>
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            gap: 'xs',
            marginY: 'md',

            lg: {
              display: 'none'
            }
          })}
        >
          <span className={css({ fontWeight: 'bold' })}>
            {data.startDate} - {data.endDate}
          </span>
          <span>{data.company}</span>
          <span>{data.location}</span>
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: data.translations[locale].description
          }}
        ></p>
      </div>
    </div>
  )
}
