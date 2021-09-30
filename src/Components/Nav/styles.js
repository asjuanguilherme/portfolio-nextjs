import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Nav = styled.nav`
   padding: 0 1.5rem;
`

export const List = styled.ul`
   list-style-type: none;
   display: grid;
   gap: 0.5em;

   @media screen and (max-height: 520px) {
      grid-template-columns: 1fr 1fr;
   }

   font-size: 1em;
`

export const ListItem = styled.li``

const DarkLink = css`
   background-color: rgba(255,255,255,.15);
   color: white;

   .selected {
      background-color: rgba(0,0,0,.1);
      color: white;
   }

   &:hover {
      background-color: rgba(255,255,255,.05);
   }
`

export const Link = styled(NavLink)`
   display: flex;
   height: 2.5em;
   align-items: center;
   
   padding-left: 1.5em;
   border-radius: 0.7em;
   
   background-color: white;

   color: #686868;

   text-decoration: none;
   cursor: pointer;

   &:hover {
      background-color: rgba(112,112,255,.05);
   }

   span {
      margin-left: 0.5rem;
   }

   &.selected {
      background-color: rgba(112,112,255,.1);
      color: #7070FF;
   }

   @media screen and (max-width: 750px) {
      background-color: rgba(255,255,255,.15);
      color: white;

      &:hover {
         background-color: rgba(255,255,255,.05);
      }

      &.selected {
         background-color: rgba(0,0,0,.1);
         color: white;
      }
   }

   ${ props => props.theme.name === 'dark' ? DarkLink : '' }
`