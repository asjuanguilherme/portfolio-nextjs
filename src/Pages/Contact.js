import React from 'react'
import Styled from 'styled-components'

import Head from '../Layout/Head'
import Container from '../Layout/Container'
import Page from '../Layout/Page'

import Input from '../Components/Forms/Input'
import Button from '../Components/Forms/Button'
import { FaEnvelope } from 'react-icons/fa'

import AuthorLinks from '../Components/Author/AuthorLinks'

const FormGrid = Styled.form`
   display: grid;
   gap: 1.2em;
   padding-bottom: 1.5em;
`

const FormInputGrid = Styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 2em;

   @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr;
      gap: 1.2em;
   }
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

   const [ status, setStatus ] = React.useState({
      loading: false,
      error: null
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

   const sendMessage = e => {
      e.preventDefault()

      console.log('Mensagem enviada')
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
            <FormInputGrid>
               <Input
                  label="Nome"
                  type="text"
                  value={ form.name }
                  controller={ nameController }
                  validated='error'
               />
               <Input
                  label="Email"
                  type="text"
                  value={ form.email }
                  controller={ emailController }
                  validated='success'
               />
            </FormInputGrid>
            <Input
               label="Mensagem"
               type="textarea"
               value={ form.message }
               controller={ messageController }
               height={ '10em' }
            />
            <ButtonContainer>
               <Button
                  type="submit"
                  label="Enviar Mensagem"
                  icon={ <FaEnvelope /> }
                  onClick={ sendMessage }
               />
            </ButtonContainer>
         </FormGrid>
      </Container>

      </Page>
      </>
   )
}

export default Contact
