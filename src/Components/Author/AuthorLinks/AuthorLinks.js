import React from 'react'

import * as S from './styles'

import {
   FaInstagram, FaLinkedinIn, FaEnvelope, FaGithub
} from 'react-icons/fa'

const AuthorLinks = () => {
   return (
      <S.Wrapper>
         <S.IconLink
            href="https://instagram.com/asjuanguilherme"
            target="_blank"
         >
            <FaInstagram/>
         </S.IconLink>

         <S.IconLink
            href="https://linkedin.com/in/asjuanguilherme"
            target="_blank"
         >
            <FaLinkedinIn/>
         </S.IconLink>

         <S.IconLink
            href="https://github.com/asjuanguilherme"
            target="_blank"
         >
            <FaGithub/>
         </S.IconLink>

         <S.IconLink
            href="mailto:asjuanguilherme@gmail.com"
            target="_blank"
         >
            <FaEnvelope/>
         </S.IconLink>
      </S.Wrapper>
   )
}

export default AuthorLinks
