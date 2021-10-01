import styled from 'styled-components'

export const Wrapper = styled.div`
   position: relative;
`

export const Label = styled.label`
   display: block;
   padding-left: 1em;
   padding-bottom: .5em;
   color: ${ props => props.theme.colors.primary };
   opacity: .875;
`

export const Input = styled.input`
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

export const Textarea = styled.textarea`
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
      border-color: ${ props => props.theme.colors.primary };
   }
`