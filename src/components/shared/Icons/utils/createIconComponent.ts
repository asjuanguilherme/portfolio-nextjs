/* eslint-disable react/display-name */
import { createElement, ReactSVGElement } from 'react'
import { CSSObject } from 'styled-components'

type Content = { bold: JSX.Element; light: JSX.Element }
type Variant = 'bold' | 'light'

export type IconComponentProps = {
  variant?: Variant
  color?: string
  size?: string
  className?: string
  styles?: CSSObject
}

export type IconComponent = (props: IconComponentProps) => ReactSVGElement

export type CreateIconComponentProps = {
  content: Content
  viewBox: string
  size?: string
  color?: string
  variant?: Variant
}

const createIconComponent =
  ({ content, viewBox }: CreateIconComponentProps): IconComponent =>
  ({
    variant = 'light',
    size = '1em',
    color = 'currentColor',
    ...componentProps
  }: IconComponentProps) => {
    const props = {
      height: size,
      width: size,
      fill: color,
      stroke: color,
      viewBox: viewBox,
      ...componentProps,
      className: componentProps.className
    }

    return createElement('svg', props, content[variant])
  }

export default createIconComponent
