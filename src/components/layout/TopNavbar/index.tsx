import { MenuIcon } from 'lucide-react'
import LanguageSwitcher from '../LanguageSwitcher'
import { css } from '@styled-system/css'
import { Dispatch, SetStateAction } from 'react'
import Button from '@/components/shared/Button'
import { container } from '@styled-system/patterns'

export type TopNavbarProps = {
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}

export const TopNavbar = ({ setMenuOpen }: TopNavbarProps) => {
  const handleMenuClick = () => {
    setMenuOpen(true)
  }

  return (
    <header
      className={css({
        width: '100%',
        background: 'secondary.500',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 2,
        color: 'white',
        lg: {
          display: 'none'
        }
      })}
    >
      <div
        className={container({
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          height: '70px'
        })}
      >
        <div
          className={css({
            marginRight: 'auto',
            display: 'flex',
            flexDir: 'column'
          })}
        >
          <span
            className={css({
              fontFamily: 'var(--font-playfair)',
              color: 'primary.500',
              fontWeight: 'extrabold',
              fontSize: '2xl'
            })}
          >
            Juan Guilherme
          </span>
          <span className={css({})}>Frontend Developer</span>
        </div>
        <LanguageSwitcher showLabel={false} />
        <Button
          icon={<MenuIcon />}
          color="secondary"
          onClick={handleMenuClick}
        />
      </div>
    </header>
  )
}

export default TopNavbar
