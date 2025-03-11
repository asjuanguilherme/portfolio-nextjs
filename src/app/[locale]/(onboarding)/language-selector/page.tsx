import { Locale } from '@/i18n/locales'
import { css } from '@styled-system/css'
import { container } from '@styled-system/patterns'
import { getTranslations } from 'next-intl/server'
import OnboardingLanguageSelector from './OnboardingLanguageSelector'
import Button from '@/components/shared/Button'
import { Link } from '@/i18n/navigation'
import TextWithTypingEffect from '@/components/shared/TextWithTypingEffect'

type OnboardingPageParams = { locale: Locale }

type OnboardingPageProps = {
  params: Promise<OnboardingPageParams>
}

export default async function OnboardingPage({ params }: OnboardingPageProps) {
  const locale = (await params).locale
  const translations = await getTranslations('ONBOARDING.LANGUAGE_SELECTOR')

  return (
    <div className={css({ color: 'white', height: '100%' })}>
      <div
        className={container({
          maxWidth: 'breakpoint-md',
          display: 'flex',
          flexDir: 'column',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        })}
      >
        <h1
          className={css({
            fontSize: '2xl',
            color: 'primary.500',
            mb: 'xl',
            lg: { fontSize: '4xl' }
          })}
        >
          <TextWithTypingEffect blinkingCursor={{ disabledOnFinish: true }}>
            {translations('TITLE')}
          </TextWithTypingEffect>
        </h1>

        <OnboardingLanguageSelector selectedLocale={locale} />

        <Link href="/welcome" className={css({ mt: 'xl' })}>
          <Button as="span">{translations('CONTINUE_BUTTON')}</Button>
        </Link>
      </div>
    </div>
  )
}
