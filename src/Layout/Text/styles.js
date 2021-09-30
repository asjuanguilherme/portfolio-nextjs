import styled from 'styled-components'

export const Text = styled.div`
   width: 100%;
   color: ${ props => props.theme.colors.text };
   font-size: 1.3em;
   line-height: 1.5em;
   font-weight: 300;
`