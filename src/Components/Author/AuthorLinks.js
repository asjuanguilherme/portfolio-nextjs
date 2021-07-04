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
         <IconLink href="">
            <FaInstagram/>
         </IconLink>
         <IconLink href="">
            <FaLinkedinIn/>
         </IconLink>
         <IconLink href="">
            <FaGithub/>
         </IconLink>
         <IconLink href="">
            <FaEnvelope/>
         </IconLink>
      </Container>
   )
}

export default AuthorLinks
