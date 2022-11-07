import * as S from './styles'
import { CSSProperties } from 'react'
import Link from 'next/link'
import { IconComponent } from '../Icons/utils/createIconComponent'

export type ButtonProps = {
  color?: 'primary' | 'white'
  children?: string
  icon?: IconComponent
  onlyIcon?: boolean
  onClick?: VoidFunction
  href?: string
  isExternal?: boolean
  style?: CSSProperties
}

const Button = ({
  children,
  color = 'primary',
  icon: Icon,
  ...props
}: ButtonProps) => {
  const ButtonComponent = (buttonProps: any) => (
    <S.Wrapper
      color={color}
      {...props}
      {...buttonProps}
      aria-label={props.onlyIcon && children}
    >
      {Icon && <Icon />}
      {!props.onlyIcon && children}
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

export default Button
