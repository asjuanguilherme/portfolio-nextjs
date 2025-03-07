import { css } from '@styled-system/css'
import { container } from '@styled-system/patterns'
import Button from '../Button'
import { getTranslations } from 'next-intl/server'
import { ArrowLeftIcon } from 'lucide-react'
import { Link } from '@/i18n/navigation'

export type PageHeaderProps = {
  title: string
  returnHref?: string
}

export const PageHeader = async ({ title, returnHref }: PageHeaderProps) => {
  const translations = await getTranslations()
  return (
    <header
      className={css({
        background: 'secondary.500',
        py: 'xl',
        lg: { py: 'xl' },
        xl: { py: '2xl' }
      })}
    >
      <div className={container()}>
        {returnHref && (
          <Link href={returnHref} legacyBehavior>
            <Button
              as="a"
              icon={<ArrowLeftIcon />}
              color="primary"
              variant="inline"
            >
              {translations('ACTION_BUTTONS.RETURN')}
            </Button>
          </Link>
        )}
        <h1
          className={css({
            color: 'primary.500',
            fontFamily: 'var(--font-playfair)',
            fontWeight: 'semibold',
            letterSpacing: '-0.04em',
            fontSize: '5xl',
            lineHeight: '1em',

            md: {
              fontSize: '6xl'
            },

            lg: {
              marginBottom: '2xl',
              fontSize: '7xl'
            }
          })}
        >
          {title}
        </h1>
      </div>
    </header>
  )
}

export default PageHeader
