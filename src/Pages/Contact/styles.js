import styled from 'styled-components'

export const FormGrid = styled.form`
   display: grid;
   gap: 1.2em;
   padding-bottom: 1.5em;
`

export const FormInputGrid = styled.div`
   display: grid;
   grid-template-columns: .8fr .6fr .8fr;
   gap: 2em;

   @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr;
      gap: 1.2em;
   }
`

export const ButtonWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
`

export const AuthorLinksWrapper = styled.div`
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