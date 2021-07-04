import React from 'react'
import Styled from 'styled-components'
import { connect } from 'react-redux'

import { changeMenuState  } from '../../Store/Actions/menu'

const Button = Styled.div`
   margin-right: 1.3rem;
   color: #686868;
   cursor: pointer;
`

const MenuButton = props => {

   const { menuController, menuActive } = props

   const openMenu = () => {
      if(!menuActive) {
         menuController(true)
      }
   }

   return (
      <div>
         <Button
            onClick={ openMenu }
         >
            <svg xmlns="http://www.w3.org/2000/svg" width="29.7" height="17.7" viewBox="0 0 29.7 17.7">
            <g id="Grupo_173" data-name="Grupo 173" transform="translate(-357.65 -30.65)">
               <line id="Linha_2" data-name="Linha 2" x2="28" transform="translate(358.5 31.5)" fill="none" stroke="#707070" stroke-linecap="round" stroke-width="1.7"/>
               <line id="Linha_3" data-name="Linha 3" x2="21" transform="translate(365.5 39.5)" fill="none" stroke="#707070" stroke-linecap="round" stroke-width="1.7"/>
               <line id="Linha_4" data-name="Linha 4" x2="13" transform="translate(373.5 47.5)" fill="none" stroke="#707070" stroke-linecap="round" stroke-width="1.7"/>
            </g>
            </svg>
         </Button>
      </div>
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
   )(MenuButton)
