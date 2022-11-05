import createIconComponent from './utils/createIconComponent'

const svgContent = (
  <>
    <path d="m458 159-47-9-22-42-23 42-46 9 32 34-6 47 43-20 42 20-6-47zM402 331l-32-6-16-28-15 28-32 6 22 24-4 32 29-14 30 14-4-32z" />
    <path d="M205 256c0-105 65-194 158-230a254 254 0 1 0 0 459 246 246 0 0 1-158-229zM512 284l-26-5-13-23-13 23-26 5 18 20-3 26 24-11 24 11-3-26z" />
  </>
)

const Moon = createIconComponent({
  content: {
    light: svgContent,
    bold: svgContent
  },
  viewBox: '0 0 512 512'
})

export default Moon
