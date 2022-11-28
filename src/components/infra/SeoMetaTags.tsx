type SeoMetaTagsProps = {
  title: string
  description: string
  pathname: string
  image: string
}

const SeoMetaTags = (props: SeoMetaTagsProps) => {
  return (
    <>
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content={process.env.NEXT_PUBLIC_SITE_URL + props.pathname}
      />
      <meta property="og:image" content={props.image} />
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content="Juan Dev. Frontend" />
      <meta name="twitter:card" content="summary" />
    </>
  )
}

export default SeoMetaTags
