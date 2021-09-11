import React from 'react'
import Styled from 'styled-components'
import {
   FiExternalLink,
   FiDownload
} from 'react-icons/fi'

const Link = Styled.a`
   display: flex;
   width: max-content;
   font-size: calc( 1rem * ${ props => props.size });
   border-radius: 2rem;

   color: ${ props => props.theme.colors.primary };;

   text-decoration: none;

   &:hover {

   }
`

const Label = Styled.span`
   padding-left: .3em;
`

const Icon = Styled.span`
`

const SmartLink = ({ href, target, label,  icon = 'external-link', size = 1}) => {
   return (
      <Link href={ href } target={ target } size={ size }>
         
         { icon &&
            <Icon>
               { icon === 'external-link' &&
               <FiExternalLink />
               }
               { icon === 'download' &&
               <FiDownload />
               }
            </Icon>
         }

         { label &&
         <Label>
            { label }
         </Label>
         }

      </Link>
   )
}

export default SmartLink
