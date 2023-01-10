import * as S from './styles'
import { CSSProperties, forwardRef } from 'react'
import Link from 'next/link'
import { IconComponent } from '../Icons/utils/createIconComponent'
import CircleBackgroundAnimation from 'components/shared/CircleBackgroundAnimation'

export type ButtonProps = {
  color?: 'primary' | 'yellow' | 'white' | 'translucent'
  children?: string
  icon?: IconComponent
  onlyIcon?: boolean
  onClick?: VoidFunction
  href?: string
  isExternal?: boolean
  style?: CSSProperties
  download?: boolean
}

// eslint-disable-next-line react/display-name
const Button = forwardRef(
  ({ children, color = 'primary', icon: Icon, ...props }: ButtonProps, ref) => {
    const ButtonComponent = (buttonProps: any) => (
      <S.Wrapper
        ref={ref}
        color={color}
        {...props}
        {...buttonProps}
        target={
          props.href ? (props.isExternal ? '_blank' : '_self') : undefined
        }
        rel={props.isExternal && 'noopener noreferrer'}
      >
        {Icon && <Icon />}
        {!props.onlyIcon && children}
        <CircleBackgroundAnimation />
      </S.Wrapper>
    )

    if (props.href)
      return (
        <Link href={props.href} passHref>
          <ButtonComponent as="a" />
        </Link>
      )

    return <ButtonComponent />
  }
)

export default Button
