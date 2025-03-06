import Button from '@/components/shared/Button'
import { Link } from '@/i18n/navigation'
import { css } from '@styled-system/css'
import { useTranslations } from 'next-intl'

export const CTAButtons = () => {
  const translations = useTranslations('ACTION_BUTTONS')

  return (
    <div className={css({ display: 'flex', gap: 'sm' })}>
      <Link href="https://website.com.br" download legacyBehavior>
        <Button as="a" color="secondary">
          {translations('DOWNLOAD_CV')}
        </Button>
      </Link>
      <Link href="#experiences" legacyBehavior>
        <Button as="a" color="secondary" variant="outlined">
          {translations('SEE_MY_WORK')}
        </Button>
      </Link>
    </div>
  )
}
