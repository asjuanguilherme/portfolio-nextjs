import styled from 'styled-components'

export const Button = styled.button`
   margin-right: 1.3rem;
   color: ${ props => props.theme.colors.text };
   cursor: pointer;

   background-color: transparent;
   border: none;
   outline: none;
   
   touch-action: pan-y;

   &:hover {
   }
`
