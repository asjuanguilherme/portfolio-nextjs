import React from 'react'

import * as S from './styles'

import { withTheme } from 'styled-components'
import { connect } from 'react-redux'
import { changeThemeState } from '../../Store/Actions/theme'

export const ThemeIcon = withTheme( props => {
   return(
      <>
         <S.Icon>
            { props.theme.icon }
         </S.Icon>
         <S.Label>
         { props.theme.title }
         </S.Label>
      </>
   )
})

const ThemeToggle = ({ currentTheme, themeController , noLabel, aside}) => {
   
   const handleClick = () => {
      themeController( currentTheme === 'light' ? 'dark' : 'light' )
      console.log(currentTheme)
   }

   return (
      <S.Toggle onClick={ handleClick }>
         <ThemeIcon />
      </S.Toggle>
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
