import styled from 'styled-components'

export const Wrapper = styled.div`
   width: 100%;
   text-align: inherit;
`

export const Name = styled.h1`
   font-size: 1.5em;
   font-weight: 400;
   color: ${ props => props.theme.colors.primary };
`
export const Role = styled.h2`
   font-size: 1.2em;
   font-weight: 300;
   color: #919191;
   color: ${ props => props.theme.colors.text };
`