/* eslint-disable react/display-name */
import { createElement } from 'react'

type Content = { bold: JSX.Element; light: JSX.Element }
type Variant = 'bold' | 'light'

export type IconComponentProps = {
  variant?: Variant
  color?: string
  size?: string
  className?: string
}

export type IconComponent = (props: IconComponentProps) => JSX.Element

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
