import React from 'react'
import Styled, { keyframes } from 'styled-components'

const AnimationLoading = keyframes`
   100% {
      transform: rotate(360deg);
   }
`

const StyledLoading = Styled.div`
   width: 3rem;
   height: 3rem;
   border-radius: 50%;
   border: .5rem solid;

   border-color: ${ props => {
      if( props.theme.name === 'dark' )
      return 'rgba(255,255,255,.3)'
      
      return '#eee'
   }};

   animation: ${AnimationLoading} linear infinite .8s;
   border-left-color: ${ props => props.theme.colors.primary };
`

const StyledLabel = Styled.div`
   margin-bottom: 1rem;
   color: ${ props => props.theme.colors.text };
   font-size: 1.3rem;
`

const StyledContainer = Styled.div`
   font-size: 1em;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height: 75%;
   width: 100%;
   text-align: center;
   max-width: 1200px;
`

const Loading = ({label}) => {
   return (
      <StyledContainer>
         <StyledLabel>
            { label }
         </StyledLabel>
         <StyledLoading />
      </StyledContainer>
   )
}

export default Loading
