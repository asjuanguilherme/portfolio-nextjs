import React, { useState } from 'react'

import * as S from './styles'

import Head from '../../Layout/Head/Head'
import Container from '../../Layout/Container/Container'
import Page from '../../Layout/Page/Page'

import Input from '../../Components/Forms/Input/Input'
import Button from '../../Components/Buttons/Button'

import { IoIosSend } from 'react-icons/io'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

import AuthorLinks from '../../Components/Author/AuthorLinks/AuthorLinks'

import useForm from '../../Hooks/useForm'

const Contact = () => {
   const [loading, setLoading] = useState(false)
   const [success, setSuccess] = useState(false)
   const [error, setError] = useState(null)

   const name = useForm('name')
   const tel = useForm('tel')
   const email = useForm('email')
   const message = useForm('message')

   const sendMessage = e => {
      e.preventDefault()

      name.validate()
      tel.validate()
      email.validate()
      message.validate()

      const url = 'http://diana-teste.000webhostapp.com/cms/wp-json/contact-form-7/v1/contact-forms/58/feedback'
      const settings = {
         method: 'post',
         body: {
            'your-name': name.value,
            'your-email': email.value,
            'your-message': message.value,
            'your-telephone': tel.value
         }
      }


      if( name.validate() && tel.validate() && email.validate() && message.validate()) {
         setLoading(true)

         fetch(url, settings)
            .then( response => response)
            .then( response => console.log(response))
            .then( response => setLoading(false))
            .finally( response => setSuccess(true))
      }

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
                  placeholder="Nome e Sobrenome"
                  { ...name }
                  required
               />
               <Input
                  label="Telefone"
                  mask="(99) 99999-9999"
                  placeholder="(84) 99999-9999"
                  type="text"
                  { ...tel }
                  required
               />
               <Input
                  label="Email"
                  placeholder="formulario@mail.com"
                  type="email"
                  required
                  { ...email }
               />
            </S.FormInputGrid>
            <Input
               label="Mensagem"
               type="textarea"
               resize="none"
               rows='6'
               { ...message }
               required
            />
            <S.ButtonWrapper>
               <Button
                  type="submit"
                  label="Enviar Mensagem"
                  sufix={ success? <IoMdCheckmarkCircleOutline /> : <IoIosSend /> }
                  loading={ loading }
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
