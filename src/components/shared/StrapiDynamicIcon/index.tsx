import { StrapiSingleTypeData } from 'types/strapi'
import createIconComponent, {
  IconComponentProps
} from 'components/shared/Icons/utils/createIconComponent'

export type StrapiDynamicIconProps = IconComponentProps &
  StrapiSingleTypeData<{
    slug: string
    viewBox: string
    svgLight: string
    svgBold?: string
  }>

const StrapiDynamicIcon = ({ data, ...props }: StrapiDynamicIconProps) => {
  if (!data) return <></>

  const Icon = createIconComponent({
    viewBox: data.attributes.viewBox,
    content: {
      light: (
        <g dangerouslySetInnerHTML={{ __html: data.attributes.svgLight }} />
      ),
      bold: (
        <g
          dangerouslySetInnerHTML={{
            __html: data.attributes.svgBold || data.attributes.svgLight
          }}
        />
      )
    }
  })

  return <Icon {...props} />
}

export default StrapiDynamicIcon
