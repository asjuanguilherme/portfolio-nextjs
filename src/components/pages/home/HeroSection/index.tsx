import { css, cx } from '@styled-system/css'
import { container } from '@styled-system/patterns'
import { getTranslations } from 'next-intl/server'
import { CTAButtons } from './CTAButtons'
import StatNumber from '@/components/shared/Stat'

export const HomeHeroSection = async () => {
  const translation = await getTranslations('HOME.SECTIONS.HERO')

  return (
    <section
      id="start"
      className={css({
        bg: 'primary.500',
        color: 'secondary.500',
        py: 'lg',

        lg: {
          py: '4xl'
        }
      })}
    >
      <div
        className={cx(
          container(),
          css({ lg: { display: 'flex', justifyContent: 'space-between' } })
        )}
      >
        <div className={css({})}>
          <h1
            className={css({
              fontFamily: 'var(--font-playfair)',
              fontWeight: 'extrabold',
              lineHeight: '1em',
              fontSize: '6xl',
              letterSpacing: '-0.04em',

              xl: {
                fontSize: '8xl'
              }
            })}
          >
            Juan Guilherme
          </h1>
          <span
            className={css({
              d: 'block',
              fontSize: '3xl',
              marginBottom: 'xl',

              xl: {
                fontSize: '5xl'
              }
            })}
          >
            {translation('SUBTITLE')}
          </span>
          <CTAButtons />
        </div>
        <div
          className={css({
            display: 'flex',
            gap: 'sm',
            marginTop: '3xl',

            lg: {
              flexDir: 'column',
              justifyContent: 'flex-end',
              textAlign: 'right'
            }
          })}
        >
          <StatNumber
            prefix="+"
            label={translation('COMPLETED_PROJECTS')}
            number={14}
          />
          <StatNumber
            prefix="+"
            label={translation('YEARS_OF_EXPERIENCE')}
            number={3}
          />
        </div>
      </div>
    </section>
  )
}

export default HomeHeroSection
