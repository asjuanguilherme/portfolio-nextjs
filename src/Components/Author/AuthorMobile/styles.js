import styled from 'styled-components'

export const Wrapper = styled.div`
   padding: 0 1.5rem;
   margin: 2rem 0;

   *{
      color: white !important;
   }
`
export const PhotoWrapper = styled.div`
   width: 100%;
   max-width: 50%;
   margin: auto;

   @media screen and (max-height: 520px) {
      display: none;
   }
`
export const InformationsWrapper = styled.div`
   margin-top: 1rem;
   text-align: center;

   @media screen and (max-height: 520px) {
      display: none;
   }
`
export const Links = styled.div`
   margin-top: 1.5rem;
`

export const LandscapeInformation = styled.div`
   display: none;
   
   @media screen and (max-height: 520px) {
      display: flex;
      div {
         justify-content: center;
      }
   }
`