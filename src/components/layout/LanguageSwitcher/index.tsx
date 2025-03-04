'use client'

import LanguageOptionItem from '@/components/shared/LanguageOptionItem'
import { Locale } from '@/i18n/locales.config'
import { css, cx } from '@styled-system/css'
import { ChevronDown } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

export type LanguageSwitcherProps = {
  showLabel?: boolean
}

export const LanguageSwitcher = ({
  showLabel = true
}: LanguageSwitcherProps) => {
  const [locale, setLocale] = useState<Locale>('en')
  const [open, setOpen] = useState(false)

  const listRef = useRef<HTMLUListElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const langOptions = [
    {
      label: 'English',
      locale: 'en'
    },
    {
      label: 'Português',
      locale: 'pt'
    },
    {
      label: 'Nederlands',
      locale: 'nl'
    }
  ] as const

  const handleOptionClick = (locale: 'pt' | 'en' | 'nl') => {
    setLocale(locale)
    setOpen(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setOpen(state => !state)
    } else if (event.key === 'ArrowDown' && !open) {
      setOpen(true)
      setTimeout(() => listRef.current?.querySelector('button')?.focus(), 10)
    }
  }

  const handleOptionKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (!listRef.current || !buttonRef.current) return

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
      case 'Escape': {
        setOpen(false)
        buttonRef.current.focus()
        break
      }
    }
  }

  // Closes dropdown when user clicks outside of it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node

      if (wrapperRef.current && !wrapperRef.current.contains(target)) {
        setOpen(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => document.removeEventListener('click', handleOutsideClick)
  }, [])

  return (
    <div
      ref={wrapperRef}
      className={css({ position: 'relative' })}
      onClick={e => e.stopPropagation()}
    >
      <button
        ref={buttonRef}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select Language"
        className={css({
          display: 'flex',
          alignItems: 'center',
          py: 'xs',
          px: 'sm',

          _hover: {
            cursor: 'pointer'
          }
        })}
        onClick={() => setOpen(state => !state)}
        onKeyDown={handleKeyDown}
      >
        <LanguageOptionItem showLabel={showLabel} locale={locale} />
        <ChevronDown
          className={cx(
            css({ transitionDuration: 'fast', marginLeft: 'sm' }),
            open && css({ transform: 'rotate(-180deg)' })
          )}
        />
      </button>

      <div
        onBlur={() => setOpen(false)}
        role="listbox"
        className={cx(
          css({
            bg: 'secondary.400',
            border: '1px solid',
            borderColor: 'secondary.300',
            position: 'absolute',
            zIndex: 1,
            left: '50%',
            transform: 'translate(-50%, 40px)',
            top: 1,
            transitionDuration: 'normal',
            width: '150px'
          }),
          !open &&
            css({
              opacity: 0,
              pointerEvents: 'none',
              transform: 'translate(-50%, 0)'
            })
        )}
      >
        <ul ref={listRef}>
          {langOptions.map(item => (
            <li key={item.locale}>
              <button
                role="option"
                aria-selected={locale === item.locale}
                onClick={() => handleOptionClick(item.locale)}
                onFocus={() => setOpen(true)}
                onKeyDown={handleOptionKeyDown}
                className={css({
                  py: 'xs',
                  px: 'md',
                  width: '100%',
                  transitionDuration: 'fast',

                  _hover: {
                    cursor: 'pointer',
                    bg: 'secondary.300'
                  }
                })}
              >
                <LanguageOptionItem locale={item.locale} showLabel />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LanguageSwitcher
