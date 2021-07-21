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
   
   background: ${ props => props.theme.colors.gradientBackground };
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
