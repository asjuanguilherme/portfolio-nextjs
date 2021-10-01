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
            rel="noopener"
         >
            <FaInstagram/>
         </S.IconLink>

         <S.IconLink
            href="https://linkedin.com/in/asjuanguilherme"
            target="_blank"
            rel="noopener"
         >
            <FaLinkedinIn/>
         </S.IconLink>

         <S.IconLink
            href="https://github.com/asjuanguilherme"
            target="_blank"
            rel="noopener"
         >
            <FaGithub/>
         </S.IconLink>

         <S.IconLink
            href="mailto:asjuanguilherme@gmail.com"
            target="_blank"
            rel="noopener"
         >
            <FaEnvelope/>
         </S.IconLink>
      </S.Wrapper>
   )
}

export default AuthorLinks
