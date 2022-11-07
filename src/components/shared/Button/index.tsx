import * as S from './styles'
import { CSSProperties, ReactNode } from 'react'
import Link from 'next/link'
import { IconComponent } from '../Icons/utils/createIconComponent'

export type ButtonProps = {
  color?: 'primary' | 'white'
  children?: ReactNode
  icon?: IconComponent
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
    <S.Wrapper color={color} {...props} {...buttonProps}>
      {Icon && <Icon />}
      {children}
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
