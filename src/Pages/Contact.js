import React from 'react'
import Styled from 'styled-components'

import Head from '../Layout/Head'
import Container from '../Layout/Container'
import Page from '../Layout/Page'
import Section from '../Layout/Section/Section'

import Input from '../Components/Forms/Input'
import Button from '../Components/Forms/Button'
import { FaEnvelope } from 'react-icons/fa'

import AuthorLinks from '../Components/Author/AuthorLinks'

const FormGrid = Styled.form`
   display: grid;
   gap: 1.2em;
`

const ButtonContainer = Styled.div`
   display: flex;
   justify-content: flex-end;
`

const AuthorLinksContainer = Styled.div`
   display: none;

   & a {
      margin: 0;
      margin-right: 1.2em;
   }

   @media screen and (max-width: 768px) {
      display: flex;
      padding: 2em 0;
      font-size: 1.2em;
   }
`

const Contact = () => {

   const [form, setForm] = React.useState({
      name: '',
      email: '',
      message: '',
   })

   const nameController = e => {
      setForm( state => ({
         ...state,
         name: e.target.value
      }))
   }

   const emailController = e => {
      setForm( state => ({
         ...state,
         email: e.target.value
      }))
   }

   const messageController = e => {
      setForm( state => ({
         ...state,
         message: e.target.value
      }))
   }

   return (
      <>
      <Head title="Contato" />
      <Page
         title="Contato"
         description="Você pode entrar em contato comigo por qualquer uma das minhas  redes sociais que estão abaixo ou pelo formulário de contato!"
      >

      <Container>
         <AuthorLinksContainer>
            <AuthorLinks />
         </AuthorLinksContainer>
      </Container>

      <Container>
         <FormGrid>
            <Input
               type="text"
               placeholder="Seu nome ex: Steve Jobs"
               value={ form.name }
               controller={ nameController }
            />
            <Input
               type="text"
               placeholder="Seu email ex: stevejobs@apple.com"
               value={ form.email }
               controller={ emailController }
            />
            <Input
               type="textarea"
               placeholder="Escreva sua mensagem aqui..."
               value={ form.message }
               controller={ messageController }
               height={ '15em' }
            />
            <ButtonContainer>
               <Button
                  type="submit"
                  label="Enviar Mensagem"
                  icon={ <FaEnvelope /> }
                  onClick={ () => console.log('olá mundo') }
               />
            </ButtonContainer>
         </FormGrid>
      </Container>

      </Page>
      </>
   )
}

export default Contact
