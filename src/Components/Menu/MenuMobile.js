import React from 'react'
import Styled from 'styled-components'

import AuthorMobile from '../Author/AuthorMobile'
import Nav from '../Nav/Nav'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const Menu = Styled.div`
   width: 100vw;
   height: 100vh;
   position: fixed;
   left: 0;
   top: 0;
   z-index: 1;

   background: -moz-linear-gradient(195deg, rgba(112,112,255,1) 0%, rgba(99,99,255,1) 50%, rgba(104,70,185,1) 100%);
   background: -webkit-linear-gradient(195deg, rgba(112,112,255,1) 0%, rgba(99,99,255,1) 50%, rgba(104,70,185,1) 100%);
   background: linear-gradient(195deg, rgba(112,112,255,1) 0%, rgba(99,99,255,1) 50%, rgba(104,70,185,1) 100%);
   filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7070ff",endColorstr="#6846b9",GradientType=1);

   @media screen and (min-width: 751px) {
      display: none;
   }
`
const Container = Styled.div`
   margin-left: 26%;
   padding: 3% 0;
   font-size: 1rem;

   display: flex;
   flex-direction: column;
   height: 100vh;
   
   @media screen and (max-width: 360px) {
      font-size: 0.8rem;
   }

   @media screen and (max-height: 520px) {
      font-size: .7em;
   }
`
const ThemeToggleContainer = Styled.div`
   display: flex;
   justify-content: flex-end;
   padding: 0 1.5rem;
   margin-top: 3em;
`

const MenuMobile = () => {
   return (
      <Menu>
         <Container>
            <AuthorMobile />
            <Nav />
            <ThemeToggleContainer>
               <ThemeToggle/>
            </ThemeToggleContainer>
         </Container>
      </Menu>
   )
}

export default MenuMobile
