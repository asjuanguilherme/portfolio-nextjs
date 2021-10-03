import styled from 'styled-components'


export const LinkButton = styled.a`
   display: block;

   position: absolute;
   left: 0;
   top: 0;
   z-index: 2;

   width: 100%;
   height: 100%;
`

export const Button = styled.button`
   user-select: none;
   position: relative;
   z-index: 1;

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