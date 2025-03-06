import PageHeader from '@/components/shared/PageHeader'
import SectionTitle from '@/components/shared/SectionTitle'
import { projects } from '@/data/projects'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { css } from '@styled-system/css'
import { container } from '@styled-system/patterns'
import Button from '@/components/shared/Button'
import { Link } from '@/i18n/navigation'
import ImagesCarousel from '@/components/shared/ImagesCarousel'

export default async function ProjectDetailsPage({
  params
}: {
  params: {
    slug: string
  }
}) {
  const projectData = projects.filter(
    project => project.slug === params.slug
  )[0]
  const translations = await getTranslations()

  if (!projectData) return notFound()

  return (
    <>
      <PageHeader title={projectData.title} returnHref="/" />
      <section className={css({ py: '2xl', lg: { py: '2xl' } })}>
        <div className={container({ mb: '2xl' })}>
          <SectionTitle className={css({ mb: '2xl' })}>
            {translations('PROJECT_DETAILS.SECTIONS.ABOUT_THE_PROJECT.TITLE')}
          </SectionTitle>
          <div
            className={css({
              '& p': { marginBottom: 'md' },
              marginBottom: 'md'
            })}
          >
            {projectData.content}
          </div>
          {projectData.href && (
            <Link
              href={projectData.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                {translations('ACTION_BUTTONS.VIEW_PUBLISHED_PROJECT')}
              </Button>
            </Link>
          )}
          {projectData.images.length > 0 && (
            <ImagesCarousel
              className={css({ mt: '2xl' })}
              data={projectData.images.map((item, index) => ({
                key: index + '',
                ...item
              }))}
            />
          )}
        </div>
      </section>
      <section className={css({ py: '2xl', bg: '#FFFCF2', lg: { py: '2xl' } })}>
        <div className={container()}>
          <SectionTitle>
            {translations(
              'PROJECT_DETAILS.SECTIONS.TECHNOLOGIES_AND_TOOLS.TITLE'
            )}
          </SectionTitle>
        </div>
      </section>
    </>
  )
}
