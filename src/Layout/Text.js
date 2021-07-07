import React from 'react'
import Styled from 'styled-components'

const TextContainer = Styled.div`
   width: 100%;
   color: #686868;
   font-size: 1.3em;
   line-height: 1.6em;
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
