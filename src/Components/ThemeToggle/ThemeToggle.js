import React from 'react'

import * as S from './styles'

import { connect } from 'react-redux'
import { changeThemeState } from '../../Store/Actions/theme'

const ThemeToggle = ({ currentTheme, themeController , noLabel, aside}) => {
   
   const handleClick = () => {
      themeController( currentTheme === 'light' ? 'dark' : 'light' )
      console.log(currentTheme)
   }

   const returnThemeName = () => {
      if( !noLabel ) {
         if( currentTheme === 'light' ) return 'Tema Claro'
         if( currentTheme === 'dark' ) return 'Tema Escuro'
      }
   }

   return (
      <S.Wrapper>
         <S.Label>{ returnThemeName() }</S.Label>
         <S.Toggle aside={ aside } onClick={ handleClick } />
      </S.Wrapper>
   )
}

const mapStateToProps = state => {
   return {
      currentTheme: state.currentTheme
   }
}

const mapActionCreatorsToProps = dispatch => {
   return {
      themeController(newState) {
         const action = changeThemeState(newState)
         dispatch(action)
      }
   }
}

export default connect(
   mapStateToProps,
   mapActionCreatorsToProps
)(ThemeToggle)
