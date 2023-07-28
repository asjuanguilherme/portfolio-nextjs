import * as S from './styles'
import Image from 'next/image'
import { TestimonialData } from 'types/TestimonialData'

export type TestimonialCardProps = TestimonialData

const TestimonialCard = ({ author, testimonial }: TestimonialCardProps) => {
  return (
    <S.Wrapper>
      <S.Author>
        <S.AuthorImage>
          {author.photo && (
            <Image
              src={author.photo}
              alt={author.name}
              height={64}
              width={64}
              objectFit="cover"
              objectPosition="center"
            />
          )}
        </S.AuthorImage>
        <S.AuthorInfo>
          <S.AuthorName>{author.name}</S.AuthorName>
          <S.AuthorRole>{author.role}</S.AuthorRole>
        </S.AuthorInfo>
      </S.Author>
      <S.Text>{testimonial}</S.Text>
    </S.Wrapper>
  )
}

export default TestimonialCard
