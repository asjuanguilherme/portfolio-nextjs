import { DefaultTheme } from 'styled-components'

const getNextLayer = (layer: keyof DefaultTheme['colors']['layers']) => {
  if (layer === 2) return 1
  return (layer + 1) as keyof DefaultTheme['colors']['layers']
}

export default getNextLayer
