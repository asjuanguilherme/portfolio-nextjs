import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import { FaChevronRight } from 'react-icons/fa'

const Button = Styled(Link)`
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

const SectionButton = ({ settings }) => {
   return (
      <Button
         to={ settings.link }
         href={ settings.href }
         target={ settings.blank ? '_blank' : '' }
         >
         { settings.label }
         { settings.icon && <FaChevronRight/> }
      </Button>
   )
}

export default SectionButton
