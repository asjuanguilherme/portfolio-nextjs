import React from 'react'
import Styled from 'styled-components'

const ThemeToggleContainer = Styled.div`
   display: flex;
   align-items: center;
`

const Toggle = Styled.span`
   display: flex;
   align-items: center;
   width: 4em;
   height: 1.6em;
   border-radius: 1.7em;
   background-color: rgba(255,255,255,.15);

   cursor: pointer;

   position: relative;

   &::after {
      content: '';
      height: 1.2em;
      width: 1.2em;
      background-color: #FCC455;
      border-radius: 50%;

      position: absolute;
      left: 7%;
      transition: .3s;
   }

   // &::after {
   //    left: initial;
   //    right: 7%;
   //    background-color: blue;
   // }
`

const ThemeLabel = Styled.span`
   color: white;
   margin-right: 1rem;
`

const ThemeToggle = () => {
   return (
      <ThemeToggleContainer>
         <ThemeLabel>Tema Claro</ThemeLabel>
         <Toggle></Toggle>
      </ThemeToggleContainer>
   )
}

export default ThemeToggle
