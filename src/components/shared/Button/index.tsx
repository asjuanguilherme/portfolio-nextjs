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
  as?: React.ElementType
} & HTMLAttributes<HTMLButtonElement>

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
    })
  }
}

export const Button = ({
  children,
  icon,
  color = 'primary',
  variant = 'filled',
  as: Wrapper = 'button',
  ...props
}: ButtonProps) => {
  return (
    <Wrapper
      className={cx(
        buttonStyleByColor[color][variant],
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
        }),
        !children && icon && css({ width: '40px', px: '0px' })
      )}
      {...props}
    >
      {icon}
      {children}
    </Wrapper>
  )
}

export default Button
