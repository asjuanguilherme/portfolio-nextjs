import React from 'react'
import Styled from 'styled-components'
import { FaHome, FaUser, FaEnvelope, FaPager } from 'react-icons/fa'

const NavStyled = Styled.nav`
   padding: 0 1.5rem;
`

const NavList = Styled.ul`
   list-style-type: none;
   display: grid;
   gap: 0.5em;

   @media screen and (max-height: 520px) {
      grid-template-columns: 1fr 1fr;
   }

   font-size: 1em;

   li {
      a {
         display: flex;
         height: 2.5em;
         align-items: center;
         
         padding-left: 1.5em;
         border-radius: 0.7em;
         
         background-color: white;

         color: #686868;
         text-decoration: none;
      
         &:hover {
            background-color: rgba(112,112,255,.05);
            cursor: pointer;
         }

         span {
            margin-left: 0.5rem;
         }
      }

      &.active {
         a {
            background-color: rgba(112,112,255,.1);
            color: #7070FF;
         }
      }

      @media screen and (max-width: 750px) {
         a {
            background-color: rgba(255,255,255,.15);
            color: white;

            &:hover {
               background-color: rgba(255,255,255,.05);
            }
         }

         &.active {
            a {
               background-color: rgba(0,0,0,.1);
               color: white;
            }
         }
      }
   }
`

const Nav = () => {
   return (
      <NavStyled>
         <NavList>
            <li className="active">
               <a href="https://www.google.com.br">
                  <FaHome/>
                  <span>Inicio</span>
               </a>
            </li>
            <li className="">
               <a href="https://www.google.com.br">
                  <FaUser/>
                  <span>Sobre</span>
               </a>
            </li>
            <li className="">
               <a href="https://www.google.com.br">
                  <FaPager/>
                  <span>Portfólio</span>
               </a>
            </li>
            <li className="">
               <a href="https://www.google.com.br">
                  <FaEnvelope/>
                  <span>Contato</span>
               </a>
            </li>
         </NavList>
      </NavStyled>
   )
}

export default Nav
