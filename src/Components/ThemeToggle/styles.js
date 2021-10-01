import styled, { css } from 'styled-components'

const LightTheme = css`
   background-color: white;
   box-shadow: 0 0 0 1px ${ props => props.theme.colors.empty };
`

export const Toggle = styled.button`
   height: 2.5rem;
   padding: 0 .5rem;

   margin-left: 1rem;

   border-radius: 10rem;
   padding-left: .5rem;
   padding-right: .8rem;
   
   display: flex;
   align-items: center;
   
   background-color: transparent;
   border: none;
   outline: none;
   
   color: ${ props => props.theme.colors.primary };
   background-color: ${ props => props.theme.colors.empty };
   
   @media screen and (max-width: 751px) { 
      background-color: rgba(255,255,255,.15);
      color: white;
   } 

   max-width: 2.5rem;
   overflow: hidden;

   transition: .3s;
   transition-property: all;

   &:hover {
      cursor: pointer;
      max-width: 180px;
   }

   &::after {
      content: ${ props => props.theme.title };
      display: block;
   }

   ${ props => props.theme.name === 'light' ? LightTheme : '' }

`

export const Icon = styled.span`
   font-size: 1.5rem;
   padding-right: .5rem;
   svg {
      vertical-align: middle;
      padding-bottom: 3px;
   }
`

export const Label = styled.span`
   white-space: nowrap;
   font-size: 1.05rem;
`