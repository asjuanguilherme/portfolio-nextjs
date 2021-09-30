import styled from 'styled-components'

export const LinkWrapper = styled.a`
   display: flex;
   width: max-content;
   font-size: calc( 1rem * ${ props => props.size });
   border-radius: 2rem;

   color: ${ props => props.theme.colors.primary };;

   text-decoration: none;
`

export const Label = styled.span`
   padding-left: .3em;
`

export const Icon = styled.span`
`