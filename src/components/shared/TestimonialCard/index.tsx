import * as S from './styles'
import Image from 'next/image'
import { DefaultTheme } from 'styled-components'
import TestimonialDto from 'services/cms/types/TestimonialDto'
import { getCmsMediaUrl } from 'services/cms/utils'

export type TestimonialCardProps = TestimonialDto & {
  layer?: keyof DefaultTheme['colors']['layers']
}

const TestimonialCard = ({
  authorName,
  authorPhoto,
  authorRole,
  testimonial,
  layer = 1
}: TestimonialCardProps) => {
  return (
    <S.Wrapper layer={layer}>
      <S.Author>
        <S.AuthorImage>
          {authorPhoto.data && (
            <Image
              src={getCmsMediaUrl(authorPhoto.data)}
              alt={authorPhoto.data?.attributes.alternativeText}
              height={64}
              width={64}
              objectFit="cover"
              objectPosition="center"
            />
          )}
        </S.AuthorImage>
        <S.AuthorInfo>
          <S.AuthorName>{authorName}</S.AuthorName>
          <S.AuthorRole>{authorRole}</S.AuthorRole>
        </S.AuthorInfo>
      </S.Author>
      <S.Text>{testimonial}</S.Text>
    </S.Wrapper>
  )
}

export default TestimonialCard
