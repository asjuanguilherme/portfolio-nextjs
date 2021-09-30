import React from 'react'

import * as S from './styles'

import { FaChevronRight } from 'react-icons/fa'

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
