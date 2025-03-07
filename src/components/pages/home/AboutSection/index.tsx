import SectionTitle from '@/components/shared/SectionTitle'
import { css, cx } from '@styled-system/css'
import { container } from '@styled-system/patterns'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export const AboutSection = async () => {
  const translations = await getTranslations('HOME.SECTIONS.ABOUT')

  return (
    <section className={css({ bg: '#FFFCF2' })} id="about">
      <div
        className={cx(
          container(),
          css({
            py: '2xl',
            xl: {
              py: '4xl',
              display: 'flex',
              alignItems: 'center'
            }
          })
        )}
      >
        <div>
          <SectionTitle className={css({ mb: '2xl' })}>
            {translations('TITLE')}
          </SectionTitle>
          <div
            className={css({
              '& p': { mb: 'md' },
              md: {
                fontSize: 'lg'
              }
            })}
            dangerouslySetInnerHTML={{ __html: translations.raw('CONTENT') }}
          ></div>
        </div>
        <div
          className={css({
            flexShrink: 0,
            px: '2xl',
            xlDown: { display: 'none' }
          })}
        >
          <Image
            height={300}
            width={300}
            src="/assets/picture.png"
            alt="Juan guilherme image"
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
