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
        position: 'relative',

        lg: {
          _before: {
            content: "''",
            bg: 'secondary.500',
            width: '50%',
            height: '100%',
            left: 0,
            top: 0,
            position: 'absolute',
            zIndex: 0
          },
          _after: {
            content: "''",
            bg: 'primary.500',
            width: '50%',
            height: '100%',
            right: 0,
            top: 0,
            position: 'absolute',
            zIndex: 0
          }
        }
      })}
    >
      <div className={container({ px: 0 })}>
        <ul
          className={css({
            lg: { display: 'flex', zIndex: 1, position: 'relative' }
          })}
        >
          <li>
            <ServiceItem
              className={css({
                width: '100%',
                p: 'xl',
                lg: { pr: '2xl' }
              })}
              icon={<SquareTerminal />}
              title={translations('SOFTWARE_DEVELOPMENT.TITLE')}
              color="secondary"
            >
              {translations('SOFTWARE_DEVELOPMENT.CONTENT')}
            </ServiceItem>
          </li>
          <li>
            <ServiceItem
              className={css({ width: '100%', p: 'xl', lg: { pl: '2xl' } })}
              icon={<PenTool />}
              title={translations('UI_DESIGN.TITLE')}
              color="primary"
            >
              {translations('UI_DESIGN.CONTENT')}
            </ServiceItem>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ServicesSection
