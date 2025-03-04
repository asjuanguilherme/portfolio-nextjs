'use client'

import { css } from '@styled-system/css'
import { NavItem } from '../NavItem'
import { useState } from 'react'
import LanguageSwitcher from '../LanguageSwitcher'

export const LayoutSidebar = () => {
  const [active, setActive] = useState('/#start')

  const navItems = [
    {
      label: 'Start',
      href: '/#start'
    },
    {
      label: 'About me',
      href: '/#about'
    },
    {
      label: 'Expertises',
      href: '/#expertises'
    },
    {
      label: 'Experiences',
      href: '/#experiences'
    },
    {
      label: 'Projects',
      href: '/#projects'
    },
    {
      label: 'Testimonials',
      href: '/#testimonials'
    }
  ]

  return (
    <aside
      className={css({
        width: '270px',
        display: 'flex',
        flexDir: 'column',
        background: 'secondary.500',
        color: 'white',
        py: '3xl',
        px: 'sm',
        alignItems: 'center',
        justifyContent: 'space-between'
      })}
    >
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: 'xs',
          width: '100%',
          alignItems: 'center'
        })}
      >
        <span className={css({ color: 'primary.500', fontSize: 'sm' })}>
          18:32 Brussels, BE
        </span>

        <LanguageSwitcher />
      </div>

      <div role="navigation">
        <ul className={css({ display: 'flex', flexDirection: 'column' })}>
          {navItems.map(item => (
            <li key={item.href}>
              <NavItem
                label={item.label}
                active={item.href === active}
                onClick={() => setActive(item.href)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div>{/* Sidebar Footer */}</div>
    </aside>
  )
}

export default LayoutSidebar
