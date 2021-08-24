import React from 'react'
import Styled from 'styled-components'

const TextContainer = Styled.p`
   width: 100%;
   color: ${ props => props.theme.colors.text };
   font-size: 1.3em;
   line-height: 1.5em;
   font-weight: 300;
`

const Text = props => {
   return (
      <TextContainer>
         { props.children }
      </TextContainer>
   )
}

export default Text
