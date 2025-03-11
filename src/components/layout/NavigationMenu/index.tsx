'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { NavItem } from '../NavItem'
import { css } from '@styled-system/css'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { breakpoints } from '@/styles/theme.config'
import { closeMenu, mainElementID } from '../layout-menu'

export const NavigationMenu = () => {
  const listRef = useRef<HTMLUListElement>(null)
  const translations = useTranslations('UI.SIDEBAR.NAVIGATION')
  const locale = useLocale()
  const [activeSectionId, setActiveSectionId] = useState('')
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const sections = document.body.querySelectorAll('main > section')

    if (pathname !== '/') {
      setActiveSectionId('')
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        let mostVisibleSection: Element
        let highestVisibility = 0

        entries.forEach(entry => {
          const { intersectionRatio, isIntersecting, target } = entry

          if (isIntersecting && intersectionRatio > highestVisibility) {
            mostVisibleSection = target
            highestVisibility = intersectionRatio
          }
        })

        if (mostVisibleSection! && mostVisibleSection.id !== activeSectionId) {
          window.history.replaceState(
            {},
            '',
            `/${locale}/#${mostVisibleSection.id}`
          )
        }
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -50% 0px'
      }
    )

    sections.forEach(section => {
      if (section.id) observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const getActiveSectionIdFromHash = () => {
    const hash = window.location.hash
    if (hash) {
      setActiveSectionId(hash.replace('#', ''))
    }
  }

  useEffect(() => {
    getActiveSectionIdFromHash()

    const interval = setInterval(() => {
      getActiveSectionIdFromHash()
    }, 100)

    return () => clearInterval(interval)
  }, [pathname])

  const navItems = useMemo(
    () => [
      {
        label: translations('START'),
        sectionId: 'start'
      },
      {
        label: translations('ABOUT'),
        sectionId: 'about'
      },
      {
        label: translations('EXPERTISES'),
        sectionId: 'skills'
      },
      {
        label: translations('EXPERIENCES'),
        sectionId: 'experiences'
      },
      {
        label: translations('PROJECTS'),
        sectionId: 'projects'
      }
    ],
    [translations]
  )

  const handleNavItemClick = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    const main = document.getElementById(mainElementID)

    if (section) {
      window.location.hash = '#' + sectionId

      // Offset added to handle with mobile top navbar
      if (window.innerWidth < breakpoints.lg)
        main?.scroll({
          top: section.offsetTop - 70,
          behavior: 'smooth'
        })
    } else {
      router.push('/#' + sectionId)
      setActiveSectionId(sectionId)
    }

    closeMenu()
  }

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
          <li key={item.sectionId} onKeyDown={handleOptionKeyDown}>
            <NavItem
              label={item.label}
              onClick={() => handleNavItemClick(item.sectionId)}
              active={item.sectionId === activeSectionId}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
