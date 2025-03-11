import PageHeader from '@/components/shared/PageHeader'
import SectionTitle from '@/components/shared/SectionTitle'
import { projects } from '@/data/projects'
import { getLocale, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { css } from '@styled-system/css'
import { container } from '@styled-system/patterns'
import Button from '@/components/shared/Button'
import { Link } from '@/i18n/navigation'
import ImagesCarousel from '@/components/shared/ImagesCarousel'
import { SkillsGroupedByCategory } from '@/components/shared/SkillsGroupedByCategory'
import { Locale } from '@/i18n/locales'
import { ExternalLinkIcon } from 'lucide-react'
import { Metadata } from 'next'

export type ProjectDetailsPageParams = {
  locale: Locale
  slug: string
}

export const generateMetadata = async ({
  params
}: {
  params: Promise<ProjectDetailsPageParams>
}): Promise<Metadata> => {
  const translations = await getTranslations({ locale: (await params).locale })
  const projectData = projects.filter(project => project.slug)[0]

  return {
    title: translations('PROJECT_DETAILS.PAGE_TITLE', {
      title: projectData.translations[(await params).locale].title
    })
  }
}

export default async function ProjectDetailsPage({
  params
}: {
  params: Promise<ProjectDetailsPageParams>
}) {
  const { slug } = await params
  const projectData = projects.filter(project => project.slug === slug)[0]
  const translations = await getTranslations()
  const locale = (await getLocale()) as Locale

  if (!projectData) return notFound()

  return (
    <>
      <PageHeader
        title={projectData.translations[locale].title}
        returnHref="/"
      />
      <section
        className={css({
          py: 'xl',
          pb: 0,
          md: { pb: 'xl' },
          lg: { py: '2xl' }
        })}
      >
        <div className={container()}>
          <SectionTitle className={css({ mb: '2xl' })}>
            {translations('PROJECT_DETAILS.SECTIONS.ABOUT_THE_PROJECT.TITLE')}
          </SectionTitle>
          <div
            className={css({
              marginBottom: 'xl',

              '& p, & a, & ul': {
                marginTop: 'sm'
              },

              '& ul': {
                display: 'flex',
                flexDir: 'column',
                gap: 'xs',
                listStyleType: 'disc',
                paddingLeft: 'md'
              }
            })}
            dangerouslySetInnerHTML={{
              __html: projectData.translations[locale].content
            }}
          ></div>
          {projectData.href && (
            <Link
              href={projectData.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button as="span" icon={<ExternalLinkIcon />} color="secondary">
                {translations('ACTION_BUTTONS.VIEW_PUBLISHED_PROJECT')}
              </Button>
            </Link>
          )}
        </div>
      </section>
      <section className={css({ py: 'xl', lg: { py: '2xl' } })}>
        {projectData.images.length > 0 && (
          <ImagesCarousel
            className={css({ mt: '2xl' })}
            data={projectData.images.map((item, index) => ({
              key: index + '',
              ...item
            }))}
          />
        )}
      </section>
      <section className={css({ py: '2xl', bg: '#FFFCF2', lg: { py: '4xl' } })}>
        <div className={container()}>
          <SectionTitle className={css({ mb: '2xl' })}>
            {translations(
              'PROJECT_DETAILS.SECTIONS.TECHNOLOGIES_AND_TOOLS.TITLE'
            )}
          </SectionTitle>

          <SkillsGroupedByCategory items={projectData.skills} locale={locale} />
        </div>
      </section>
    </>
  )
}
