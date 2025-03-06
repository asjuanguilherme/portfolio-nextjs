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
        py: '2xl',
        background: 'secondary.500',
        lg: { py: '4xl' }
      })}
    >
      <div className={container()}>
        {returnHref && (
          <Link href={returnHref}>
            <Button icon={<ArrowLeftIcon />} color="primary" variant="inline">
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
          {title}
        </h1>
      </div>
    </header>
  )
}

export default PageHeader
