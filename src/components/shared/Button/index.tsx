import * as S from './styles'
import { CSSProperties, forwardRef, useCallback } from 'react'
import { IconComponent } from '../Icons/utils/createIconComponent'
import CircleBackgroundAnimation from 'components/shared/CircleBackgroundAnimation'
import Link from 'next/link'

export type ButtonProps = {
  color?: 'primary' | 'yellow' | 'white' | 'translucent'
  children?: string
  icon?: IconComponent
  onlyIcon?: boolean
  onClick?: VoidFunction
  href?: string
  isExternal?: boolean
  style?: CSSProperties
  download?: boolean | string
}

// eslint-disable-next-line react/display-name
const Button = forwardRef(
  (
    { children, color = 'primary', icon: Icon, href, ...props }: ButtonProps,
    ref
  ) => (
    <S.Wrapper
      // @ts-ignore}
      ref={ref}
      color={color}
      {...props}
      as={href ? 'a' : undefined}
      href={href}
      target={href ? (props.isExternal ? '_blank' : '_self') : undefined}
      rel={props.isExternal ? 'noopener noreferrer' : undefined}
    >
      {Icon && <Icon />}
      {!props.onlyIcon && children}
      <CircleBackgroundAnimation />
    </S.Wrapper>
  )
)

export default Button
