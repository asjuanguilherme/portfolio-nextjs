import styled from 'styled-components'
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

export const Link = styled(NavLink)`
   display: flex;
   height: 2.5em;
   align-items: center;
   
   padding-left: 1.5em;
   border-radius: 0.7em;
   
   color: ${ props => props.theme.colors.nav.neutral.color };
   background-color: ${ props => props.theme.colors.nav.neutral.background };

   text-decoration: none;
   cursor: pointer;
   transition: .2s;

   span {
      margin-left: 0.5rem;
   }

   position: relative;
   overflow: hidden;
   width: 100%;

   &:hover {
      color: ${ props => props.theme.colors.nav.hover.color };
      background-color: ${ props => props.theme.colors.nav.hover.background };
   }

   &.selected {
      color: ${ props => props.theme.colors.nav.selected.color };
      background-color: ${ props => props.theme.colors.nav.selected.background };
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
`