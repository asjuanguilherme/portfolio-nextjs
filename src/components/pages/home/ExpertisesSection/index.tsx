import SectionTitle from '@/components/shared/SectionTitle'
import { skillCategories } from '@/data/skillCategories'
import { skills } from '@/data/skills'
import { Locale } from '@/i18n/locales'
import { css } from '@styled-system/css'
import { container } from '@styled-system/patterns'
import { getLocale, getTranslations } from 'next-intl/server'

export const ExpertisesSection = async () => {
  const locale = (await getLocale()) as Locale
  const translations = await getTranslations('HOME.SECTIONS.EXPERTISES')

  return (
    <section
      className={css({ bg: 'backgroundLight', py: '2xl', lg: { py: '4xl' } })}
    >
      <div className={container()}>
        <div>
          <SectionTitle className={css({ mb: '2xl' })}>
            {translations('TITLE')}
          </SectionTitle>
        </div>

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
          {skillCategories.map(skillCategory => (
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
                {Object.keys(skills).map(skill => {
                  if (skills[skill].category !== skillCategory.name) return

                  const Icon = skills[skill].icon
                  return (
                    <li key={skill}>
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
                          <Icon />
                        </span>
                        <span
                          className={css({
                            fontSize: 'lg',
                            lg: { fontSize: 'xl' }
                          })}
                        >
                          {skills[skill].title}
                        </span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpertisesSection
