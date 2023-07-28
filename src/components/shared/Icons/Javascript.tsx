import createIconComponent from './utils/createIconComponent'

const svgContent = <>insert svg children content here</>

const JavascriptIcon = createIconComponent({
  content: {
    light: svgContent,
    bold: svgContent
  },
  viewBox: '0 0 0 0'
})

export default JavascriptIcon
