import React from 'react'
import Styled from 'styled-components'

const StyledButton = Styled.button`
   height: 3em;
   padding: 0 3em;
   width: ${ ({ width }) => width? width : 'max-content' };
   
   display: flex;
   align-items: center;
   justify-content: center;
   
   border-radius: 2em;
   
   background: linear-gradient(20deg, rgba(112,112,255,1) 0%, rgba(99,99,255,1) 50%, rgba(104,70,185,1) 100%);
   border: 0;

   font-size: 1em;
   color: white;

   &:hover {
      cursor: pointer;
   }

   @media screen and (max-width: 768px) {
      width: 100%;
   }
`

const Button = ({ type, label, onClick, width }) => {
   return (
      <StyledButton
         type={ type }
         onClick={ onClick }
         width={ width }
      >
         { label }
      </StyledButton>
   )
}

export default Button
