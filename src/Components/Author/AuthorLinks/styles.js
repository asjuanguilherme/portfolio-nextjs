import styled from 'styled-components'

export const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

export const IconLink = styled.a`
   font-size: 1.6em;
   margin: 0 0.8rem;
   color: ${ props => props.theme.colors.primary };

   transition: .2s;

   &:hover {
      opacity: .5;
   }
`
