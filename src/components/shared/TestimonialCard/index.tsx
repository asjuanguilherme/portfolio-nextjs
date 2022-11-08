import * as S from './styles'
import Image from 'next/image'
import { DefaultTheme } from 'styled-components'

export type TestimonialCardProps = {
  author: {
    name: string
    role: string
    image: {
      url: string
      alt: string
    }
    company?: string
  }
  text: string
  layer?: keyof DefaultTheme['colors']['layers']
}

const TestimonialCard = ({ author, text, layer = 1 }: TestimonialCardProps) => {
  return (
    <S.Wrapper layer={layer}>
      <S.Author>
        <S.AuthorImage>
          <Image
            src={author.image.url}
            alt={author.image.alt}
            height={64}
            width={64}
            objectFit="cover"
            objectPosition="center"
          />
        </S.AuthorImage>
        <S.AuthorInfo>
          <S.AuthorName>{author.name}</S.AuthorName>
          <S.AuthorRole>
            {author.role} {author.company ? ' - ' + author.company : ''}
          </S.AuthorRole>
        </S.AuthorInfo>
      </S.Author>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  )
}

export default TestimonialCard
