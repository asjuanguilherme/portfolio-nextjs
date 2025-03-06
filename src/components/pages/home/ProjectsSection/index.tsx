import { css } from '@styled-system/css'
import { container } from '@styled-system/patterns'
import { getTranslations } from 'next-intl/server'
import ProjectsCarousel from './ProjectsCarousel'

export const ProjectsSection = async () => {
  const translations = await getTranslations('HOME.SECTIONS.PROJECTS')
  return (
    <section
      className={css({
        background: 'secondary.500'
      })}
    >
      <div className={container({ py: '2xl', lg: { py: '4xl' } })}>
        <h2
          className={css({
            color: 'primary.500',
            fontFamily: 'var(--font-playfair)',
            fontWeight: 'semibold',
            letterSpacing: '-0.04em',
            fontSize: '5xl',
            textAlign: 'center',
            marginBottom: 'xl',

            md: {
              fontSize: '6xl'
            },

            lg: {
              marginBottom: '2xl',
              fontSize: '7xl'
            }
          })}
        >
          {translations('TITLE')}
        </h2>

        <ProjectsCarousel />
      </div>
    </section>
  )
}
