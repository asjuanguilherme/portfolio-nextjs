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

   background: ${ props => props.theme.colors.gradientBackground };

   ${ props => {
      if(props.theme.name === 'dark') return `
         background: linear-gradient(195deg, #1f0c47 0%, #222274 50%, #1e1e74 100%);
      `
      }
   }

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
