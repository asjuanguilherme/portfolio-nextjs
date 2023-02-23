import { DefaultTheme } from 'styled-components'
import { Sun } from 'components/shared/Icons'

const light: DefaultTheme = {
  name: 'light',
  title: 'Tema Claro',
  icon: Sun,
  themeColor: 'yellow',
  colors: {
    title: '#444444',
    text: '#777777',
    main: {
      primary: {
        light: '#99D8FF',
        normal: '#06A1FE',
        dark: '#266FD1'
      },
      yellow: {
        light: '#f6a43b',
        normal: '#ef7911',
        dark: '#d3570c'
      },
      themeGradient: {
        light: '#06A1FE',
        normal: '#06A1FE',
        dark: '#266FD1'
      }
    },
    layers: {
      0: {
        background: '#EEEEEE',
        border: '#E2E2E2'
      },
      1: {
        background: '#F6F6F6',
        border: '#E9E9E9'
      },
      2: {
        background: '#FFFFFF',
        border: '#F2F2F2'
      }
    }
  }
}

export default light
