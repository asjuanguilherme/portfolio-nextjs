'use client'
import { useRef, useState } from 'react'
import { NavItem } from '../NavItem'
import { css } from '@styled-system/css'
import { useTranslations } from 'next-intl'

export const NavigationMenu = () => {
  const [active, setActive] = useState('/#start')
  const listRef = useRef<HTMLUListElement>(null)
  const translations = useTranslations('UI.SIDEBAR.NAVIGATION')

  const navItems = [
    {
      label: translations('START'),
      href: '/#start'
    },
    {
      label: translations('ABOUT'),
      href: '/#about'
    },
    {
      label: translations('EXPERTISES'),
      href: '/#expertises'
    },
    {
      label: translations('EXPERIENCES'),
      href: '/#experiences'
    },
    {
      label: translations('PROJECTS'),
      href: '/#projects'
    },
    {
      label: translations('TESTIMONIALS'),
      href: '/#testimonials'
    }
  ]

  const handleOptionKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
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
  return (
    <div role="navigation">
      <ul
        ref={listRef}
        className={css({ display: 'flex', flexDirection: 'column' })}
      >
        {navItems.map(item => (
          <li key={item.href} onKeyDown={handleOptionKeyDown}>
            <NavItem
              label={item.label}
              active={item.href === active}
              onClick={() => setActive(item.href)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
