'use client'

import { ProjectData } from '@/data/types/ProjectData'
import { css, cx } from '@styled-system/css'
import Image from 'next/image'
import Button from '../Button'
import { useTranslations } from 'next-intl'
import { ExternalLinkIcon } from 'lucide-react'
import Link from 'next/link'

export type ProjectCardProps = {
  data: ProjectData
}

export const ProjectCard = ({ data }: ProjectCardProps) => {
  const translations = useTranslations('ACTION_BUTTONS')

  return (
    <div
      aria-labelledby={`$project-title-${data.id}`}
      className={css({
        bg: 'primary.500',
        height: '300px',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        p: 'md',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        _hover: {
          '& .card-image': {
            transform: 'scale(2)',
            opacity: 0,
            pointerEvents: 'none'
          }
        }
      })}
    >
      <Image
        src={'/assets/projects/groupcaos/card.png'}
        alt={data.title}
        height={400}
        width={400}
        className={cx(
          'card-image',
          css({
            objectFit: 'cover',
            objectPosition: 'center',
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '100%',
            transitionDuration: 'normal'
          })
        )}
      />
      <div className={css({ display: 'flex', flexDir: 'column' })}>
        <span
          id={`$project-title-${data.id}`}
          className={css({ fontSize: '3xl', fontWeight: 'medium' })}
        >
          {data.title}
        </span>
        <span className={css({ display: 'block', mb: 'xs' })}>
          {data.category}
        </span>
        <ul className={css({ display: 'flex', flexWrap: 'wrap', gap: '4px' })}>
          {data.skills.map(skill => (
            <>
              <li key={skill.title}>{skill.title}</li>
              {<span role="none"> | </span>}
            </>
          ))}
        </ul>
      </div>

      <div>
        {data.href && (
          <Link href={data.href} target="_blank" rel="noopener noreferrer">
            <Button color="primary" icon={<ExternalLinkIcon />} fill>
              {translations('VIEW_PUBLISHED_PROJECT')}
            </Button>
          </Link>
        )}
        <Link href={`/projects/${data.slug}`}>
          <Button color="secondary" fill>
            {translations('SEE_PROJECT_DETAILS')}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
