import React from 'react'
import Styled from 'styled-components'

const StyledInputContainer = Styled.div`
   position: relative;
`

const StyledInput = Styled.input`
   padding: .7em 1.2em;
   width: 100%;
   color: ${ props => props.theme.colors.text };
   background-color: ${ props => props.theme.colors.empty };
   border: .15em solid transparent;
   border-radius: 1.5em;
   font-size: 1.1em;
   transition: border .2s;

   height: ${ ({ height }) => height };
   width: ${ ({ width }) => width };
   
   &::placeholder {
      color: ${ props => props.theme.colors.text };
   }

   &:focus {
      background-color: ${ props => props.theme.colors.empty };
      border-color: #7070FF;
   }
`

const StyledTextarea = Styled.textarea`
   resize: none;

   padding: .7em 1.2em;
   width: 100%;
   color: ${ props => props.theme.colors.text };
   background-color: ${ props => props.theme.colors.empty };
   border: .15em solid transparent;
   border-radius: 1em;
   font-size: 1.1em;
   font-family: inherit;
   transition: border .2s;

   height: ${ ({ height }) => height ? height : '10em' };
   width: ${ ({ width }) => width ? width : '100%'};

   &::placeholder {
      color: ${ props => props.theme.colors.text };
   }

   &:focus {
      background-color: ${ props => props.theme.colors.empty };
      border-color: #7070FF;
   }
`

const Input = ({ type, value, controller, name, placeholder, width, height, validated }) => {
   
   if(type === 'textarea') return (
      <StyledTextarea
         onChange={ controller }
         value={ value }
         placeholder={ placeholder }
         name={ name }
         height={ height }
         width={ width }
   />
   )

   return (
      <StyledInputContainer>
         <StyledInput
            type={ type }
            onChange={ controller }
            value={ value }
            placeholder={ placeholder }
            name={ name }
            width={ width }
            validated={ validated }
         />
      </StyledInputContainer>
   )
}

export default Input
