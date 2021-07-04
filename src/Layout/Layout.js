import React from 'react'
import Styled from 'styled-components'

import Aside from './Aside'
import Main from './Main'
import Header from './Header'

const LayoutStyled = Styled.div`
   width: 100vw;
   min-height: 100vh;
   max-height: max-content;
   display: flex;
   background-color: red;
   transition: .5s;
   transition-property: transform, border-radius;
   position: relative;
   z-index: 2;

   @media screen and (max-width: 750px) {
      &.menu-active {
         overflow: hidden;
         transform: scale(0.75) translateX(-80%);
         border-radius: 1.5rem;
      }
   }
`

const Layout = props => {
   return (
      <LayoutStyled className="menu-active">
         <Header />
         <Aside />
         <Main>
            { props.children }
         </Main>
      </LayoutStyled>
   )
}

export default Layout
