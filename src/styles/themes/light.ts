import { DefaultTheme } from 'styled-components'

const light: DefaultTheme = {
  name: 'light',
  colors: {
    title: '#444444',
    text: '#777777',
    main: {
      primary: {
        light: '#99D8FF',
        normal: '#06A1FE',
        dark: '#266FD1'
      },
      themeGradient: {
        light: '#06A1FE',
        normal: '#06A1FE',
        dark: '#266FD1'
      }
    },
    layers: {
      0: {
        background: '#FCFCFC',
        border: '#E5E5E5'
      },
      1: {
        background: '#FFFFFF',
        border: '#E6E6E6'
      },
      2: {
        background: '#FCFCFC',
        border: '#CDCDCD'
      }
    }
  }
}

export default light
