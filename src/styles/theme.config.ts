export const colors = {
  amber: {
    50: '#FFEEB8',
    100: '#FFE9A3',
    200: '#FFE07A',
    300: '#FFD652',
    400: '#FFCD29',
    500: '#FFC300',
    600: '#C79800',
    700: '#8F6D00',
    800: '#574200',
    900: '#1F1700',
    950: '#030200'
  },
  blue: {
    50: '#6BE8FF',
    100: '#56E5FF',
    200: '#2DDFFF',
    300: '#05D9FF',
    400: '#00BADB',
    500: '#0097B2',
    600: '#00677A',
    700: '#003842',
    800: '#00080A',
    900: '#000000',
    950: '#000000'
  },
  red: {
    50: '#FFF0F0',
    100: '#FFDBDC',
    200: '#FFB8B9',
    300: '#FF9496',
    400: '#FF7073',
    500: '#FF4D4F',
    600: '#FF0A0E',
    700: '#C70003',
    800: '#850002',
    900: '#420001',
    950: '#240001'
  },
  green: {
    50: '#E7F9E5',
    100: '#C8EBC4',
    200: '#A2D8A6',
    300: '#7CCB87',
    400: '#52C41A',
    500: '#3DAF15',
    600: '#319B0F',
    700: '#228A0A',
    800: '#116B05',
    900: '#005C00'
  },
  black: {
    50: '#BFBFBF',
    100: '#A6A6A6',
    200: '#8C8C8C',
    300: '#737373',
    400: '#595959',
    500: '#3F3F3F',
    600: '#262626',
    700: '#0C0C0C',
    800: '#000000',
    900: '#000000'
  },
  orange: {
    50: '#FFE4B5',
    100: '#FFD5A0',
    200: '#FFC180',
    300: '#FFA650',
    400: '#FAAD14',
    500: '#F9A300',
    600: '#F89B00',
    700: '#F68F00',
    800: '#F68500',
    900: '#F57D00'
  },
  armadillo: {
    50: '#A0978A',
    100: '#978D7E',
    200: '#83786A',
    300: '#6C6458',
    400: '#564F45',
    500: '#3F3A33',
    600: '#201D1A',
    700: '#010101',
    800: '#000000',
    900: '#000000',
    950: '#000000'
  }
} as const

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
} as const

export const borderRadius = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12
}

export const spacing = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 56,
  '4xl': 72
} as const

export const typography = {
  iconSize: 16,
  fontSizeBase: 14,
  fontSizeSm: 12,
  fontSizeLg: 16,
  fontSizeH1: 32,
  fontSizeH2: 24,
  fontSizeH3: 20,
  fontSizeH4: 16,
  fontSizeH5: 14,
  fontSizeH6: 12,
  fontWeightNormal: 400,
  fontWeightBold: 600,
  lineHeightBase: 1.5715
} as const

export const themeConfig = {
  breakpoints,
  colors,
  spacing,
  typography
} as const
