import styled from 'styled-components'

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

export const Description = styled.p`
   color: ${ props => props.theme.colors.text };
   margin-top: 1.5em;
   font-size: 1.2em;
   max-width: 360px;
`

export const TitleWrapper = styled.div`
   display: flex;
   align-items: center;
   font-size: 3.5em;
   color: ${ props => props.theme.colors.primary };

   @media screen and (max-width: 480px) {
      font-size: 2.8em;
}
`

export const Title = styled.h2`
   margin-right: .3em;
`