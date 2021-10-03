import styled, { css } from 'styled-components'

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

const InputError = css`
   &, &:focus, &:hover {
      border-color: ${ props => props.theme.colors.status.error };
   }
`

const InputStyle = css`
   width: ${ props => props.width ? props.width : '100%' };
   padding: .7em 1.2em;
   
   border: .15em solid transparent;
   border-radius: 1.5em;

   font-size: 1.1em;
   font-family: inherit;
   
   color: ${ props => props.theme.colors.text };
   background-color: ${ props => props.theme.colors.empty };

   transition: border .2s;

   &::placeholder {
      color: ${ props => props.theme.colors.text };
      opacity: .45;
      font-style: italic;
      font-weight: lighter;
   }

   &:focus {
      background-color: ${ props => props.theme.colors.empty };
      border-color: #7070FF;
   }

   ${ props => props.error ? InputError : ''}
`

export const Input = styled.input`
   ${InputStyle}
`

export const Textarea = styled.textarea`
   resize: ${ props => props.resize};

   ${InputStyle}
`

export const Error = styled.span`
   display: flex;
   align-items: center;

   padding: .2rem 1rem;
   font-size: .875rem;

   border-radius: 1rem;
   margin-top: .2rem;
   
   color: ${ props => props.theme.colors.status.error };
   
   svg {
      margin-right: 4px;
      font-size: 1rem;
   }

`