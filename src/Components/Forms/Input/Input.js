import React from 'react'

import * as S from './styles'

import InputMask from 'react-input-mask'
import { FaExclamationCircle } from 'react-icons/fa'

const Input = ({ type, label, id, error, setValue, onChange, onBlur, value, ...props }) => {
   
   return (
      <S.Wrapper>
         { label &&
            <S.Label htmlFor={ id } > { label } </S.Label>
         }

         { (type === 'textarea') &&
            <S.Textarea
               id={ id }
               value={ value }
               onChange={ onChange }
               onBlur={ onBlur }
               error={ error }
               { ...props }
            >{ value }</S.Textarea>
         }
         
         { !(type === 'textarea') &&
            <InputMask id={ id } value={ value } onChange={ onChange } onBlur={ onBlur } { ...props }>
               { (inputProps) => (
                  <S.Input type={ type } value={ value } onChange={ onChange } error={ error } { ...inputProps } disableUnderscore/>
               )}
            </InputMask>
         }

         { error &&
            <S.Error>
               <FaExclamationCircle />
               { error }
            </S.Error>
         }
      </S.Wrapper>
   )
}

export default Input
