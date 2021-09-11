import React from 'react'
import Styled from 'styled-components'

const StyledButton = Styled.button`
   user-select: none;

   height: 3em;
   padding: 0 3em;
   width: ${ ({ width }) => width? width : 'max-content' };
   
   display: flex;
   align-items: center;
   justify-content: center;
   
   border-radius: 2em;
   
   background: ${ props => props.theme.name === 'light' ? props.theme.colors.primary : '#231A75'};
   
   border: 0;

   font-size: 1em;
   color: white;

   &:hover {
      cursor: pointer;
      filter: brightness(130%);
   }

   @media screen and (max-width: 768px) {
      width: 100%;
   }

   transition: .3s;

   &[disabled] {
      opacity: .4;
      filter: grayscale(1);

      &:hover {
         cursor: default;
      }
   }
`

const Button = ({ type, label, onClick, width, disabled }) => {
   return (
      <StyledButton
         type={ type }
         onClick={ disabled ? false : onClick }
         width={ width }
         disabled={ disabled }
      >
         { label }
      </StyledButton>
   )
}

export default Button
