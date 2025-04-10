import { css, cx } from '@styled-system/css'
import React, { HTMLAttributes, JSX, ReactNode } from 'react'

export type ButtonColor = 'primary' | 'secondary'

export type ButtonVariant = 'filled' | 'outlined' | 'inline'

export type ButtonProps<T extends React.ElementType> = {
  href?: string
  color?: ButtonColor
  variant?: ButtonVariant
  children?: ReactNode
  icon?: JSX.Element
  as?: T
  fill?: boolean
} & HTMLAttributes<T>

const buttonStyleByColor: Record<ButtonColor, Record<ButtonVariant, string>> = {
  primary: {
    filled: css({
      bg: 'primary.500',
      color: 'secondary.500',
      _hover: {
        bg: 'primary.400'
      }
    }),
    outlined: css({
      bg: 'transparent',
      color: 'primary.500',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.500'
    }),
    inline: css({
      color: 'primary.500',
      py: 0,
      px: 0,
      _hover: {
        opacity: 0.7
      }
    })
  },
  secondary: {
    filled: css({
      bg: 'secondary.500',
      color: 'primary.500',
      _hover: {
        bg: 'secondary.400'
      }
    }),
    outlined: css({
      bg: 'transparent',
      color: 'secondary.500',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'secondary.500'
    }),
    inline: css({
      color: 'secondary.500',
      py: 0,
      px: 0,
      _hover: {
        opacity: 0.7
      }
    })
  }
}

export const Button = ({
  children,
  icon,
  color = 'primary',
  variant = 'filled',
  as: Wrapper = 'button',
  fill,
  ...props
}: ButtonProps<React.ElementType>) => {
  const getWidthStyle = () => {
    if (fill)
      return css({
        width: '100%'
      })

    if (!children && icon) return css({ width: '40px', px: '0px' })

    return css({
      width: 'max-content',
      px: '16px'
    })
  }

  return (
    <Wrapper
      className={cx(
        buttonStyleByColor[color][variant],
        getWidthStyle(),
        css({
          fontSize: '14px',
          fontWeight: 'medium',
          border: 0,
          transitionDuration: 'normal',
          height: '40px',
          gap: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          _hover: {
            cursor: 'pointer'
          },

          md: {
            fontSize: '16px'
          }
        })
      )}
      {...props}
    >
      {icon}
      {children}
    </Wrapper>
  )
}

export default Button
