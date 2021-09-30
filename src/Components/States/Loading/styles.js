import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
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

export const Title = styled.h2`
   margin-bottom: 1rem;
   color: ${ props => props.theme.colors.text };
   font-size: 1.3rem;
`

const AnimationSpinner = keyframes`
   100% {
      transform: rotate(360deg);
   }
`

export const Spinner = styled.div`
   width: 3rem;
   height: 3rem;
   border-radius: 50%;
   border: .5rem solid;

   border-color: ${ props => {
      if( props.theme.name === 'dark' )
      return 'rgba(255,255,255,.3)'
      
      return '#eee'
   }};

   animation: ${AnimationSpinner} linear infinite .8s;
   border-left-color: ${ props => props.theme.colors.primary };
`
