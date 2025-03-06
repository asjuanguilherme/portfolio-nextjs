import SectionTitle from '@/components/shared/SectionTitle'
import { professionalExperiences } from '@/data/professionalExperiences'
import { Locale } from '@/i18n/locales'
import { css, cx } from '@styled-system/css'
import { container } from '@styled-system/patterns'
import { getLocale, getTranslations } from 'next-intl/server'
import { ProfessionalExperienceItem } from './ProfessionalExperienceItem'

export const ProfessionalExperiencesSection = async () => {
  const translations = await getTranslations('HOME.SECTIONS.EXPERIENCES')
  const locale = (await getLocale()) as Locale

  return (
    <section className={css({ bg: '#FFFCF2' })}>
      <div
        className={cx(
          container(),
          css({
            py: '2xl',
            xl: {
              py: '4xl'
            }
          })
        )}
      >
        <SectionTitle className={css({ mb: '2xl' })}>
          {translations('TITLE')}
        </SectionTitle>

        <div>
          <span
            className={css({
              display: 'flex',
              marginBottom: 'md',

              lgDown: {
                display: 'none'
              },

              _before: {
                display: 'block',
                content: "''",
                width: '300px',
                height: '4px',
                bg: 'primary.500',
                flexShrink: 0
              },

              _after: {
                display: 'block',
                content: "''",
                width: '100%',
                height: '4px',
                bg: 'secondary.500'
              }
            })}
          ></span>

          <ul
            className={css({ display: 'flex', flexDir: 'column', gap: 'lg' })}
          >
            {professionalExperiences.map(item => (
              <li key={item.id}>
                <ProfessionalExperienceItem data={item} locale={locale} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalExperiencesSection
