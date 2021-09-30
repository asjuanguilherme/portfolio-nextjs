import React from 'react'
import Styled from 'styled-components'
import {
   FaInstagram, FaLinkedinIn, FaEnvelope, FaGithub
} from 'react-icons/fa'

const Container = Styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

const IconLink = Styled.a`
   font-size: 1.6em;
   margin: 0 0.8rem;
   color: ${ props => props.theme.colors.primary };

   transition: color .2s;

   &:hover {
      color: #6556DF;
   }
`

const AuthorLinks = () => {
   return (
      <Container>
         <IconLink href="https://instagram.com/asjuanguilherme" target="_blank">
            <FaInstagram/>
         </IconLink>
         <IconLink href="https://linkedin.com/in/juan-guilherme-504471160/" target="_blank">
            <FaLinkedinIn/>
         </IconLink>
         <IconLink href="https://github.com/asjuanguilherme" target="_blank">
            <FaGithub/>
         </IconLink>
         <IconLink href="mailto:asjuanguilherme@gmail.com" target="_blank">
            <FaEnvelope/>
         </IconLink>
      </Container>
   )
}

export default AuthorLinks
