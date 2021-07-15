import React from 'react'
import Styled from 'styled-components'

import { connect } from 'react-redux'
import { changeThemeState } from '../../Store/Actions/theme'

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
      transition: left .3s;
      transition-property: left, background;
   }

   ${ props  => { 
      if( props.theme.name === 'dark') return `
      &::after {
         left: 65%;
         background-color: white;
      }
      `
   }}
`

const ThemeLabel = Styled.span`
   color: white;
   margin-right: 1rem;
`

const ThemeToggle = ({ currentTheme, themeController }) => {
   
   const handleClick = () => {
      themeController( currentTheme === 'light' ? 'dark' : 'light' )
      console.log(currentTheme)
   }

   const returnThemeName = () => {
      if( currentTheme === 'light' ) return 'Tema Claro'
      if( currentTheme === 'dark' ) return 'Tema Escuro'
   }

   return (
      <ThemeToggleContainer>
         <ThemeLabel>{ returnThemeName() }</ThemeLabel>
         <Toggle onClick={ handleClick } />
      </ThemeToggleContainer>
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
