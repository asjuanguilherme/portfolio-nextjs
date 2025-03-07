import SectionTitle from '@/components/shared/SectionTitle'
import { SkillsGroupedByCategory } from '@/components/shared/SkillsGroupedByCategory'
import { skillsList } from '@/data/skills'
import { Locale } from '@/i18n/locales'
import { css } from '@styled-system/css'
import { container } from '@styled-system/patterns'
import { getLocale, getTranslations } from 'next-intl/server'

export const ExpertisesSection = async () => {
  const locale = (await getLocale()) as Locale
  const translations = await getTranslations('HOME.SECTIONS.EXPERTISES')

  return (
    <section
      id="skills"
      className={css({ bg: 'backgroundLight', py: '2xl', lg: { py: '4xl' } })}
    >
      <div className={container()}>
        <div>
          <SectionTitle className={css({ mb: '2xl' })}>
            {translations('TITLE')}
          </SectionTitle>
        </div>

        <SkillsGroupedByCategory items={skillsList} locale={locale} />
      </div>
    </section>
  )
}

export default ExpertisesSection
