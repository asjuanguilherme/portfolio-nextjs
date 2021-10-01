import styled from 'styled-components'

export const Button = styled.button`
   user-select: none;

   height: 3em;
   width: ${ props => props.width? props.width : 'max-content' };
   
   display: flex;
   align-items: center;
   justify-content: center;
   
   padding: 0 3em;
   border-radius: 2em;
   border: 0;

   font-size: 1em;
   
   background: ${ props => props.theme.colors.primary };
   color: ${ props => props.theme.colors.background };

   &:hover {
      cursor: pointer;
      opacity: .75;
   }
   
   transition: .3s;
`