import styled from 'styled-components'

export const ProjectsGrid = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   gap: 2em;
   
   @media screen and (min-width: 1100px) {
      grid-template-columns: 1fr 1fr;
   }

   @media screen and (min-width: 1440px) {
      grid-template-columns: 1fr 1fr 1fr;
   }
`