'use client'

import LanguageIcon from '@/components/shared/LanguageIcon'
import { Locale } from '@/i18n/locales'
import { usePathname, useRouter } from '@/i18n/navigation'
import { css, cx } from '@styled-system/css'
import { KeyboardEventHandler, useRef } from 'react'

export type OnboardingLanguageSelectorProps = {
  selectedLocale: Locale
}

export const OnboardingLanguageSelector = ({
  selectedLocale
}: OnboardingLanguageSelectorProps) => {
  const listRef = useRef<HTMLUListElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  const options: { locale: Locale; title: string }[] = [
    { locale: 'en', title: 'I speak English' },
    { locale: 'pt', title: 'Eu falo português' },
    { locale: 'nl', title: 'Ik spreek Nederlands' }
  ]

  const handleOptionKeyDown: KeyboardEventHandler<
    HTMLButtonElement
  > = event => {
    if (!listRef.current) return

    const items = Array.from(listRef.current?.querySelectorAll('button'))
    const currentIndex = items.indexOf(
      document.activeElement as HTMLButtonElement
    )

    switch (event.key) {
      case 'ArrowDown': {
        event.preventDefault()
        const next = (currentIndex + 1) % items.length
        items[next]?.focus()
        break
      }
      case 'ArrowUp': {
        const next =
          currentIndex === 0
            ? items.length - 1
            : (currentIndex - 1) % items.length
        event.preventDefault()
        items[next]?.focus()
        break
      }
    }
  }

  const changeLocale = (locale: Locale) => {
    router.replace(pathname, { locale })
  }
  return (
    <div
      className={css({
        animationName: 'languageSelectorAppear',
        animationDuration: '2s'
      })}
    >
      <ul
        ref={listRef}
        className={css({ display: 'flex', flexDir: 'column', gap: 'xs' })}
      >
        {options.map(option => (
          <li key={option.locale}>
            <button
              onClick={() => changeLocale(option.locale)}
              onKeyDown={handleOptionKeyDown}
              role="option"
              aria-selected={option.locale === selectedLocale}
              className={cx(
                option.locale == selectedLocale
                  ? css({
                      background: 'primary.500',
                      color: 'secondary.500'
                    })
                  : css({
                      background: 'secondary.300',
                      color: 'white',
                      cursor: 'pointer',
                      _hover: {
                        color: 'primary.500',
                        background: 'secondary.400',
                        borderColor: 'primary.500'
                      }
                    }),
                css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'sm',
                  width: '100%',
                  fontSize: 'xl',
                  px: 'xl',
                  py: 'md',
                  border: '1px solid transparent',
                  transitionDuration: 'fast',
                  transitionProperty: 'background borderColor color'
                })
              )}
            >
              <LanguageIcon locale={option.locale} className={css({})} />
              {option.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OnboardingLanguageSelector
