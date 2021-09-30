import styled from 'styled-components'

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
`

export const Toggle = styled.span`
   display: flex;
   align-items: center;
   width: 4em;
   height: 1.6em;
   border-radius: 1.7em;
   background-color: rgba(255,255,255,.15);

   ${ props => {
      if( props.aside && props.theme.name === 'light') return `
         background-color: #f6f6f6;
      `
   }}


   cursor: pointer;

   position: relative;

   &::after {
      content: '';
      height: 1.2em;
      width: 1.2em;
      background-color: #FCC455;
      border-radius: 50%;

      position: absolute;
      left: 7%;
      transition: left .3s;
      transition-property: left, background;
   }

   ${ props  => { 
      if( props.theme.name === 'dark') return `
      &::after {
         left: 61%;
         background-color: white;
      }
      `
   }}
`

export const Label = styled.span`
   color: white;
   margin-right: 1rem;
`