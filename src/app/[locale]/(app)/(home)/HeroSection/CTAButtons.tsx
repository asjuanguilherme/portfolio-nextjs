import Button from '@/components/shared/Button'
import { Link } from '@/i18n/navigation'
import { css } from '@styled-system/css'
import { useTranslations } from 'next-intl'

export const CTAButtons = () => {
  const translations = useTranslations('ACTION_BUTTONS')

  return (
    <div className={css({ display: 'flex', gap: 'sm' })}>
      <a href="/assets/docs/cv-en.pdf" download>
        <Button as="span" color="secondary">
          {translations('DOWNLOAD_CV')}
        </Button>
      </a>
      <Link href="/#experiences">
        <Button as="span" color="secondary" variant="outlined">
          {translations('SEE_MY_WORK')}
        </Button>
      </Link>
    </div>
  )
}
