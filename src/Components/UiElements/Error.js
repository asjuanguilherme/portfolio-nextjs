import React from 'react'
import Styled from 'styled-components'

import { FaExclamationCircle } from 'react-icons/fa'

const Container = Styled.div`
   font-size: 1em;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height: 75%;
   width: 100%;
   text-align: center;
   max-width: 1200px;
`

const Text = Styled.p`
   color: ${ props => props.theme.colors.text };
   margin-top: 1.5em;
   font-size: 1.2em;
   max-width: 360px;
`

const Title = Styled.h1`
   display: flex;
   align-items: center;
   font-size: 3.5em;
   color: ${ props => props.theme.colors.primary };

   @media screen and (max-width: 480px) {
      font-size: 2.8em;
   }
`

const Label = Styled.span`
   margin-right: .3em;
`


const Error = ({ children, type }) => {
   return (
      <Container>
         <Title>
            <Label>ERRO 404</Label>
            <FaExclamationCircle />
         </Title>

         <Text> Opa! O conteúdo que você está procurando não existe...</Text>
      </Container>
   )
}

export default Error
