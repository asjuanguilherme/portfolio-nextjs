import Button from '@/components/shared/Button'
import { socialsData } from '@/data/socials'
import { css } from '@styled-system/css'
import Link from 'next/link'

export const SocialItems = () => {
  return (
    <div>
      <span
        className={css({
          fontSize: 'sm',
          color: 'primary.500',
          mb: 'xs',
          display: 'block',
          textAlign: 'center'
        })}
      >
        Contact-me
      </span>
      <ul className={css({ display: 'flex' })}>
        {socialsData.map(item => (
          <li key={item.id}>
            <Link
              target="_blank"
              href={item.url}
              title={item.label}
              aria-label={item.label}
              rel="noopener noreferrer"
              legacyBehavior
            >
              <Button icon={<item.icon />} color="secondary" as="a" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialItems
