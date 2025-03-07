import Button, { ButtonColor } from '@/components/shared/Button'
import { socialsData } from '@/data/socials'
import { css, cx } from '@styled-system/css'
import Link from 'next/link'
import { HTMLAttributes } from 'react'

export type SocialItemsProps = {
  title?: string
  buttonColor?: ButtonColor
  onlyIcon?: boolean
  listClassName?: string
} & HTMLAttributes<HTMLDivElement>

export const SocialItems = ({
  title,
  buttonColor,
  onlyIcon,
  listClassName,
  ...props
}: SocialItemsProps) => {
  return (
    <div {...props} aria-labelledby="social-items-heading">
      <span
        id="social-items-heading"
        className={css({
          fontSize: 'sm',
          color: 'primary.500',
          mb: 'xs',
          display: 'block',
          textAlign: 'center'
        })}
      >
        {title}
      </span>
      <ul className={cx(css({ display: 'flex' }), listClassName)}>
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
              <Button icon={<item.icon />} as="a" color={buttonColor}>
                {!onlyIcon && item.username}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialItems
