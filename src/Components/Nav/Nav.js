import React from 'react'

import * as S from './styles'
import { FaHome, FaUser, FaEnvelope, FaPager } from 'react-icons/fa'

import { connect } from 'react-redux'
import { changeMenuState  } from '../../Store/Actions/menu'

const Nav = ({ menuController }) => {
   return (
      <S.Nav onClick={ () => menuController(false) }>
         <S.List>

            <S.ListItem>
               <S.Link activeClassName="selected" exact to="/">
                  <FaHome/>
                  <span>Inicio</span>
               </S.Link>
            </S.ListItem>

            <S.ListItem>
               <S.Link activeClassName="selected" to="/sobre">
                  <FaUser/>
                  <span>Sobre</span>
               </S.Link>
            </S.ListItem>

            <S.ListItem>
               <S.Link activeClassName="selected" to="/portfolio">
                  <FaPager/>
                  <span>Portfólio</span>
               </S.Link>
            </S.ListItem>

            <S.ListItem>
               <S.Link activeClassName="selected" to="/contato">
                  <FaEnvelope/>
                  <span>Contato</span>
               </S.Link>
            </S.ListItem>

         </S.List>
      </S.Nav>
   )
}

const mapStateToProps = state => {
   return {
      menuActive: state.menuActive
   }
}

const mapActionCreatorsToProps = (dispatch) => {
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
)(Nav)