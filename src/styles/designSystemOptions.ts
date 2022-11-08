import { breakpoints } from 'styles/screens'

const designSystemOptions = {
  layout: {
    containerMaxWidht: breakpoints.desktop + 'px',
    gutter: '1.5rem'
  },
  spacing: {
    components: {
      smaller: '.25rem',
      small: '.5rem',
      medium: '1rem',
      large: '1.25rem',
      larger: '1.5rem'
    },
    sections: {
      smaller: '1.5rem',
      small: '2rem',
      medium: '3rem',
      large: '4rem',
      larger: '5rem'
    }
  },
  font: {
    sizes: {
      smaller: '.75rem',
      small: '.875rem',
      medium: '1rem',
      large: '1.25rem',
      larger: '1.5rem',
      xlarger: '2rem',
      xxlarger: '2.5rem'
    },
    weight: {
      normal: 300,
      semibold: 600,
      bold: 700
    }
  },
  buttonSizes: {
    default: '2.5rem'
  },
  borderRadius: {
    small: '.75rem',
    medium: '1rem',
    large: '1.5rem',
    pill: '9999px',
    circle: '100%'
  },
  zIndex: {
    navbar: 100,
    preLoader: 200
  },
  transition: {
    fast: '.15s',
    default: '.2s',
    slow: '.3s'
  }
}

export default designSystemOptions
