import { Config } from '@pandacss/dev'
import {
  borderRadius,
  breakpoints,
  colors,
  spacing,
  typography
} from './theme.config'

const tokensColors = {
  amber: {
    50: { value: colors.amber[50] },
    100: { value: colors.amber[100] },
    200: { value: colors.amber[200] },
    300: { value: colors.amber[300] },
    400: { value: colors.amber[400] },
    500: { value: colors.amber[500] },
    600: { value: colors.amber[600] },
    700: { value: colors.amber[700] },
    800: { value: colors.amber[800] },
    900: { value: colors.amber[900] },
    950: { value: colors.amber[950] }
  },
  red: {
    50: { value: colors.red[50] },
    100: { value: colors.red[100] },
    200: { value: colors.red[200] },
    300: { value: colors.red[300] },
    400: { value: colors.red[400] },
    500: { value: colors.red[500] },
    600: { value: colors.red[600] },
    700: { value: colors.red[700] },
    800: { value: colors.red[800] },
    900: { value: colors.red[900] },
    950: { value: colors.red[950] }
  },
  green: {
    50: { value: colors.green[50] },
    100: { value: colors.green[100] },
    200: { value: colors.green[200] },
    300: { value: colors.green[300] },
    400: { value: colors.green[400] },
    500: { value: colors.green[500] },
    600: { value: colors.green[600] },
    700: { value: colors.green[700] },
    800: { value: colors.green[800] },
    900: { value: colors.green[900] }
  },
  black: {
    50: { value: colors.black[50] },
    100: { value: colors.black[100] },
    200: { value: colors.black[200] },
    300: { value: colors.black[300] },
    400: { value: colors.black[400] },
    500: { value: colors.black[500] },
    600: { value: colors.black[600] },
    700: { value: colors.black[700] },
    800: { value: colors.black[800] },
    900: { value: colors.black[900] }
  },
  orange: {
    50: { value: colors.orange[50] },
    100: { value: colors.orange[100] },
    200: { value: colors.orange[200] },
    300: { value: colors.orange[300] },
    400: { value: colors.orange[400] },
    500: { value: colors.orange[500] },
    600: { value: colors.orange[600] },
    700: { value: colors.orange[700] },
    800: { value: colors.orange[800] },
    900: { value: colors.orange[900] }
  },
  armadillo: {
    50: { value: colors.armadillo[50] },
    100: { value: colors.armadillo[100] },
    200: { value: colors.armadillo[200] },
    300: { value: colors.armadillo[300] },
    400: { value: colors.armadillo[400] },
    500: { value: colors.armadillo[500] },
    600: { value: colors.armadillo[600] },
    700: { value: colors.armadillo[700] },
    800: { value: colors.armadillo[800] },
    900: { value: colors.armadillo[900] }
  }
}

export const pandaThemeConfig: Config['theme'] = {
  breakpoints: {
    xs: breakpoints.xs + 'px',
    sm: breakpoints.sm + 'px',
    md: breakpoints.md + 'px',
    lg: breakpoints.lg + 'px',
    xl: breakpoints.xl + 'px',
    xxl: breakpoints.xxl + 'px'
  },
  tokens: {
    colors: tokensColors,
    spacing: {
      xs: { value: spacing.xs + 'px' },
      sm: { value: spacing.sm + 'px' },
      md: { value: spacing.md + 'px' },
      lg: { value: spacing.lg + 'px' },
      xl: { value: spacing.xl + 'px' },
      '2xl': { value: spacing['2xl'] + 'px' },
      '3xl': { value: spacing['3xl'] + 'px' },
      '4xl': { value: spacing['4xl'] + 'px' }
    },
    radii: {
      sm: { value: borderRadius.sm + 'px' },
      md: { value: borderRadius.md + 'px' },
      lg: { value: borderRadius.lg + 'px' },
      pill: { value: '99999px' },
      circle: { value: '100%' }
    },
    fontSizes: {
      icon: { value: typography.iconSize + 'px' },
      base: { value: typography.fontSizeBase + 'px' },
      sm: { value: typography.fontSizeSm + 'px' },
      lg: { value: typography.fontSizeLg + 'px' },
      h1: { value: typography.fontSizeH1 + 'px' },
      h2: { value: typography.fontSizeH2 + 'px' },
      h3: { value: typography.fontSizeH3 + 'px' },
      h4: { value: typography.fontSizeH4 + 'px' },
      h5: { value: typography.fontSizeH5 + 'px' },
      h6: { value: typography.fontSizeH6 + 'px' }
    },
    fonts: {
      Inter: {
        value: 'var(--font-inter)'
      },
      Playfair: {
        value: 'var(--font-playfair)'
      }
    }
  },
  keyframes: {
    blink: {
      '50%': {
        opacity: '0%'
      }
    }
  },
  semanticTokens: {
    colors: {
      primary: tokensColors.amber,
      secondary: tokensColors.armadillo,
      backgroundLight: {
        value: tokensColors.amber[50]
      },
      backgroundDark: {
        value: tokensColors.armadillo[500]
      }
    }
  }
}
