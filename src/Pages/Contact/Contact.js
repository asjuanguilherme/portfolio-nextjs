import React from 'react'

import * as S from './styles'

import Head from '../../Layout/Head/Head'
import Container from '../../Layout/Container/Container'
import Page from '../../Layout/Page/Page'

import Input from '../../Components/Forms/Input/Input'
import Button from '../../Components/Forms/Buttons/Button'
import { FaEnvelope } from 'react-icons/fa'

import AuthorLinks from '../../Components/Author/AuthorLinks/AuthorLinks'

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

      const url = 'http://diana-teste.000webhostapp.com/cms/wp-json/contact-form-7/v1/contact-forms/58/feedback'

      const settings = {
         method: 'post',
         body: {
            'your-name': form.name,
            'your-email': form.email,
            'your-message': form.message
         }
      }

      console.log(settings.body)

      fetch(url, settings)
         .then( response => response)
         .then( response => console.log(response))
   }

   return (
      <>
      <Head title="Contato" />
      <Page
         title="Contato"
         description="Você pode entrar em contato comigo por qualquer uma das minhas  redes sociais que estão abaixo ou pelo formulário de contato!"
      >

      <Container>
         <S.AuthorLinksWrapper>
            <AuthorLinks />
         </S.AuthorLinksWrapper>
      </Container>

      <Container>
         <S.FormGrid>
            <S.FormInputGrid>
               <Input
                  label="Nome"
                  type="text"
                  value={ form.name }
                  controller={ nameController }
                  validated='error'
                  required
               />
               <Input
                  label="Email"
                  type="text"
                  value={ form.email }
                  controller={ emailController }
                  validated='success'
                  required
               />
            </S.FormInputGrid>
            <Input
               label="Mensagem"
               type="textarea"
               value={ form.message }
               controller={ messageController }
               height={ '10em' }
               required
            />
            <S.ButtonWrapper>
               <Button
                  type="submit"
                  label="Enviar Mensagem"
                  icon={ <FaEnvelope /> }
                  onClick={ sendMessage }
               />
            </S.ButtonWrapper>
         </S.FormGrid>
      </Container>

      </Page>
      </>
   )
}

export default Contact
