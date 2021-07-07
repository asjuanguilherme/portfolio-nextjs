import React from 'react'
import Styled from 'styled-components'
import { connect } from 'react-redux'

import { changeMenuState } from '../Store/Actions/menu'

import Aside from './Aside'
import Main from './Main'
import Header from './Header'

const LayoutStyled = Styled.div`
   width: 100vw;
   height: 100vh;
   max-height: 100vh;
   overflow: scroll;
   display: flex;
   background-color: white;
   position: relative;
   z-index: 2;
   transition: .5s ease-in-out;
   /* transition-property: max-height, transform, border-radius; */

   @media screen and (max-width: 750px) {
      &.menu-active {
         overflow: hidden;
         transform: scale(0.75) translateX(-80%);
         border-radius: 1.5rem;
      }
   }
`

const Layout = props => {

   const { menuActive, menuController } = props

   const closeMenu = () => {
      if(menuActive) {
         menuController(false)
      }
   }

   return (
      <LayoutStyled 
            className={ props.menuActive ? 'menu-active' : '' }
            onClick={closeMenu}
         >
         <Header />
         <Aside />
         <Main>
            { props.children }
         </Main>
      </LayoutStyled>
   )
}

const mapStateToProps = state => {
   return {
      menuActive: state.menuActive
   }
}

const mapActionCreatorsToProps = dispatch => {
   return {
      menuController(newState) {
         const action = changeMenuState(newState)
         dispatch(action)
      }
   }
}

export default connect(
      mapStateToProps,
      mapActionCreatorsToProps
   )(Layout)
