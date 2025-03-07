import { css, cx } from '@styled-system/css'
import React, { HTMLAttributes, ReactNode } from 'react'

export type SectionTitleProps = {
  children: ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
} & HTMLAttributes<HTMLHeadingElement>

export const SectionTitle = ({
  level = 2,
  children,
  className,
  ...props
}: SectionTitleProps) => {
  const Tag = `h${level}` as React.ElementType

  return (
    <Tag
      className={cx(
        className,
        css({
          fontFamily: 'var(--font-playfair)',
          fontSize: '5xl',
          fontWeight: 'extrabold',
          letterSpacing: '-0.04em',
          color: 'secondary.500',
          position: 'relative',
          width: 'max-content',
          lineHeight: '1em',
          zIndex: 0,

          _before: {
            content: "''",
            display: 'block',
            width: '100%',
            height: '.3em',
            position: 'absolute',
            left: 0,
            bottom: 0,
            transform: 'translateY(-50%)',
            zIndex: -1,
            background: 'primary.500'
          },

          xl: { fontSize: '7xl' }
        })
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default SectionTitle
