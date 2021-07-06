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
   color: #7070FF;

   transition: color .2s;

   &:hover {
      color: #6556DF;
   }
`

const AuthorLinks = () => {
   return (
      <Container>
         <IconLink href="https://www.google.com.br">
            <FaInstagram/>
         </IconLink>
         <IconLink href="https://www.google.com.br">
            <FaLinkedinIn/>
         </IconLink>
         <IconLink href="https://www.google.com.br">
            <FaGithub/>
         </IconLink>
         <IconLink href="https://www.google.com.br">
            <FaEnvelope/>
         </IconLink>
      </Container>
   )
}

export default AuthorLinks
