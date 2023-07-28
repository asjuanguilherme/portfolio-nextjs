import { DefaultTheme } from 'styled-components'
import Moon from 'components/shared/Icons/Moon'

const dark: DefaultTheme = {
  name: 'dark',
  title: 'Tema Escuro',
  icon: Moon,
  themeColor: 'primary',
  colors: {
    title: '#FFFFFF',
    text: '#E6E6E6',
    main: {
      primary: {
        light: '#dcb0ff',
        normal: '#b657ff',
        dark: '#891ad6'
      },
      yellow: {
        light: '#f6a43b',
        normal: '#ef7911',
        dark: '#d3570c'
      },
      themeGradient: {
        light: '#6a06ac',
        normal: '#6a06ac',
        dark: '#34005c'
      }
    },
    layers: {
      0: {
        background: '#131129',
        border: '#1C1A31'
      },
      1: {
        background: '#1F1C34',
        border: '#28253C'
      },
      2: {
        background: '#302D44',
        border: '#302D44'
      }
    }
  }
}

export default dark
