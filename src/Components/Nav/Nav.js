import React from 'react'

import * as S from './styles'
import { FaHome, FaUser, FaEnvelope, FaPager } from 'react-icons/fa'

const Nav = () => {
   return (
      <S.Nav>
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

export default Nav
