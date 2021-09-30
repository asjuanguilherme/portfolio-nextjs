import React from 'react'

import * as S from './styles'

import { connect } from 'react-redux'
import { changeMenuState } from '../Store/Actions/menu'

import Aside from './Aside/Aside'
import Main from './Main/Main'
import Header from './Header/Header'

const Layout = props => {

   const { menuActive, menuController } = props

   const closeMenu = () => {
      if(menuActive) {
         menuController(false)
      }
   }

   return (
      <S.Layout 
            menuActive={ props.menuActive }
            onClick={closeMenu}
         >
            
         <Header />

         <Aside />

         <Main>
            { props.children }
         </Main>

      </S.Layout>
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
