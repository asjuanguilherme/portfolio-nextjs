import styled from 'styled-components'

export const SkillsListWrapper = styled.div`
   max-width: 600px;
   display: grid;
   row-gap: 1em;
   column-gap: 3em;
   padding-left: 2.5em;
   grid-template-columns: 1fr 1fr 1fr 1fr;

   @media screen and (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
   }

   @media screen and ( max-width: 768px ) {
      grid-template-columns: 1fr 1fr;
   }
`

export const SmartLinkWrapper = styled.div`
   margin: 1.5rem 0;
`