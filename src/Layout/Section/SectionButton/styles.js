import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
   display: flex;
   align-items: center;
   text-decoration: none;
   text-transform: uppercase;
   font-weight: 500;
   color: ${ props => props.theme.colors.primary };

   svg {
      margin-left: .5em;
      height: 1.2em;
      position: relative;
      transition: .2s ease-in-out;
      left: 0;
   }

   &:hover {
      svg {
         left: .2em;
      }
   }
`