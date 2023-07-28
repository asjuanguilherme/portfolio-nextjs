import createIconComponent from './utils/createIconComponent'

const svgContent = (
  <g>
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M11 3v18H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7zm10 10v7a1 1 0 0 1-1 1h-7v-8h8zM20 3a1 1 0 0 1 1 1v7h-8V3h7z"></path>
  </g>
)

const LayoutIcon = createIconComponent({
  content: {
    light: svgContent,
    bold: svgContent
  },
  viewBox: '0 0 24 24'
})

export default LayoutIcon
