'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { NavItem } from '../NavItem'
import { css } from '@styled-system/css'
import { useLocale, useTranslations } from 'next-intl'

export const NavigationMenu = () => {
  const listRef = useRef<HTMLUListElement>(null)
  const translations = useTranslations('UI.SIDEBAR.NAVIGATION')
  const locale = useLocale()
  const [activeSectionId, setActiveSectionId] = useState('')

  useEffect(() => {
    const sections = document.body.querySelectorAll('main > section')

    const observer = new IntersectionObserver(
      entries => {
        let mostVisibleSection: Element
        let highestVisibility = 0

        entries.forEach(entry => {
          const section = entry.target
          const { intersectionRatio, isIntersecting } = entry

          if (isIntersecting && intersectionRatio > highestVisibility) {
            mostVisibleSection = section
            highestVisibility = intersectionRatio
          }
        })

        if (mostVisibleSection!.id !== activeSectionId) {
          console.log('mostVisibleSection!.id', mostVisibleSection!.id)
          console.log('activeSectionId', activeSectionId)
          console.log(mostVisibleSection!.id !== activeSectionId)

          setActiveSectionId(mostVisibleSection!.id)

          window.history.replaceState(
            {},
            '',
            `/${locale}/#${mostVisibleSection!.id}`
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
      sections.forEach(section => {
        if (section.id) observer.unobserve(section)
      })
    }
  }, [locale, activeSectionId])

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

    if (!section) return

    window.location.hash = '#' + sectionId
    window.scrollTo({ top: section.offsetTop - 100, behavior: 'smooth' })
    setActiveSectionId(sectionId)
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
