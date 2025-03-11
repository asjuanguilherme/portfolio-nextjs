import { css, cx } from '@styled-system/css'
import { ReactNode } from 'react'

export type ServiceItemProps = {
  title: string
  children: ReactNode
  color: 'primary' | 'secondary'
  icon?: ReactNode
  className?: string
}

const styleByColor = {
  primary: {
    title: css({ color: 'secondary.500' }),
    content: css({ color: 'secondary.500' }),
    wrapper: css({ bg: 'primary.500' })
  },
  secondary: {
    title: css({ color: 'primary.500' }),
    content: css({ color: 'white' }),
    wrapper: css({ bg: 'secondary.500' })
  }
} as const

export const ServiceItem = ({
  title,
  children,
  color,
  icon,
  className
}: ServiceItemProps) => {
  return (
    <div
      className={cx(
        className,
        styleByColor[color].wrapper,
        css({
          display: 'flex',
          flexDir: 'column',
          gap: 'sm',

          lg: {
            height: '100%'
          }
        })
      )}
    >
      <h3
        className={cx(
          styleByColor[color].title,
          css({
            display: 'flex',
            alignItems: 'center',
            gap: 'sm',
            fontSize: '2xl',
            lg: { fontSize: '3xl' }
          })
        )}
      >
        {icon}
        {title}
      </h3>
      <div
        className={cx(
          styleByColor[color].content,
          css({ lineHeight: '1.5em' })
        )}
      >
        {children}
      </div>
    </div>
  )
}
