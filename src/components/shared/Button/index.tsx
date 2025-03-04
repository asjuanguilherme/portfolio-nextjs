import { css, cx } from '@styled-system/css'
import React, { HTMLAttributes, JSX, ReactNode } from 'react'

type ButtonColor = 'primary' | 'secondary'

type ButtonVariant = 'filled' | 'outlined'

export type ButtonProps = {
  href?: string
  color?: ButtonColor
  variant?: ButtonVariant
  children?: ReactNode
  icon?: JSX.Element
  as?: keyof JSX.IntrinsicElements
} & HTMLAttributes<HTMLElement>

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
      border: '1px solid currentColor'
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
      border: '1px solid currentColor'
    })
  }
}

export const Button = ({
  children,
  icon,
  color = 'primary',
  variant = 'filled',
  as: Wrapper = 'button'
}: ButtonProps) => {
  return (
    <Wrapper
      className={cx(
        buttonStyleByColor[color][variant],
        !children && icon && css({ width: '40px', px: 0 }),
        css({
          fontSize: '16px',
          fontWeight: 'medium',
          border: 0,
          transitionDuration: 'normal',
          height: '40px',
          gap: '8px',
          px: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          _hover: {
            cursor: 'pointer'
          }
        })
      )}
    >
      {icon}
      {children}
    </Wrapper>
  )
}

export default Button
