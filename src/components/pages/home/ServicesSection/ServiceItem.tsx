import { css, cx } from '@styled-system/css'
import { ReactNode } from 'react'

export type ServiceItemProps = {
  title: string
  children: ReactNode
  color: 'primary' | 'secondary'
  icon?: ReactNode
}

const styleByColor = {
  primary: {
    title: css({ color: 'secondary.500' }),
    content: css({ color: 'secondary.500' })
  },
  secondary: {
    title: css({ color: 'primary.500' }),
    content: css({ color: 'white' })
  }
} as const

export const ServiceItem = ({
  title,
  children,
  color,
  icon
}: ServiceItemProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: 'sm',
        py: 'xl',

        lg: {
          py: '2xl',
          pr: '4xl'
        }
      })}
    >
      <h3
        className={cx(
          styleByColor[color].title,
          css({
            display: 'flex',
            alignItems: 'center',
            gap: 'sm',
            fontSize: '2xl',
            lg: { fontSize: '4xl' }
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
