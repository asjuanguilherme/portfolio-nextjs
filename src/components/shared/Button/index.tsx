import * as S from './styles'
import { CSSProperties, ReactNode } from 'react'
import Link from 'next/link'

export type ButtonProps = {
  color?: 'primary' | 'white'
  children?: ReactNode
  onClick: VoidFunction
  href?: string
  isExternal?: boolean
  style?: CSSProperties
}

const Button = ({ children, color = 'primary', ...props }: ButtonProps) => {
  const ButtonComponent = (buttonProps: any) => (
    <S.Wrapper color={color} {...props} {...buttonProps}>
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
