import { useState } from 'react'

const validationTypes = {
   email: {
      regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Preencha um email válido.'
   },
   tel: {
      regex: /^[(][0-9]{2}[)][ ][0-9]{5}[-]([0-9]{4}|[0-9]{3}[_])/,
      message: 'Preencha um telefone válido.'
   },
   message: {
      regex: /.{30,}/,
      message: 'Sua mensagem está curta demais.'
   },
   name: {
      regex: /^.{3,}[ ].{3,}$/,
      message: 'Insira seu nome completo.'
   },
   any: {
      regex: /^.$/
   }
}

const useForm = ( type ) => {
   const [value, setValue] = useState('')
   const [error, setError] = useState(null)

   const validate = (value) => {
      if( value.length === 0 ) {
         setError('Este campo é obrigatório.')

         return false
      } else if ( !validationTypes[type].regex.test(value) ) {
         setError( validationTypes[type].message )

         return false
      } else {
         setError(null)

         return true
      }
   }

   const onChange = (event) => {
      if( error ) validate( event.target.value )
      
      setValue(event.target.value)
   }

   return {
      value,
      setValue,
      error,
      onChange,
      onBlur: () => validate(value),
      validate: () => validate(value)
   }
}

export default useForm