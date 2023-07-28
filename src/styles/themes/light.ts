import { DefaultTheme } from 'styled-components'
import SunIcon from 'components/shared/Icons/Sun'

const light: DefaultTheme = {
  name: 'light',
  title: 'Tema Claro',
  icon: SunIcon,
  themeColor: 'yellow',
  colors: {
    title: '#444444',
    text: '#777777',
    main: {
      primary: {
        light: '#971bff',
        normal: '#7911CB',
        dark: '#3d0070'
      },
      yellow: {
        light: '#f6a43b',
        normal: '#ef7911',
        dark: '#d3570c'
      },
      themeGradient: {
        light: '#971bff',
        normal: '#971bff',
        dark: '#3d0070'
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
