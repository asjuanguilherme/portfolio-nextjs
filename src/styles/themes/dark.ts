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
        light: '#2B4363',
        normal: '#001522',
        dark: '#001522'
      }
    },
    layers: {
      0: {
        background: '#081117',
        border: '#4C5257'
      },
      1: {
        background: '#151D23',
        border: '#2C3439'
      },
      2: {
        background: '#283035',
        border: '#3D4549'
      }
    }
  }
}

export default dark
