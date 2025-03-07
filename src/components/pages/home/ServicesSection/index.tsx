import { css } from '@styled-system/css'
import { ServiceItem } from './ServiceItem'
import { getTranslations } from 'next-intl/server'
import { PenTool, SquareTerminal } from 'lucide-react'
import { container } from '@styled-system/patterns'

export const ServicesSection = async () => {
  const translations = await getTranslations('HOME.SECTIONS.SERVICES')

  return (
    <section
      className={css({
        position: 'relative'
      })}
    >
      <div
        className={css({
          bg: 'secondary.500',

          '& > *': {
            zIndex: 1
          },

          _after: {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '50%',
            right: 0,
            bottom: 0,
            bg: 'primary.500',
            zIndex: 0,

            lg: {
              right: 0,
              top: 0,
              width: '50%',
              height: '100%'
            }
          }
        })}
      >
        <div className={container()}>
          <ul className={css({ lg: { display: 'flex' } })}>
            <li>
              <ServiceItem
                icon={<SquareTerminal />}
                title={translations('SOFTWARE_DEVELOPMENT.TITLE')}
                color="secondary"
              >
                {translations('SOFTWARE_DEVELOPMENT.CONTENT')}
              </ServiceItem>
            </li>
            <li>
              <ServiceItem
                icon={<PenTool />}
                title={translations('UI_DESIGN.TITLE')}
                color="primary"
              >
                {translations('UI_DESIGN.CONTENT')}
              </ServiceItem>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
