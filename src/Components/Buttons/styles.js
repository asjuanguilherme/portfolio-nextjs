import styled, { css, keyframes } from 'styled-components'


export const LinkButton = styled.a`
   display: block;

   position: absolute;
   left: 0;
   top: 0;
   z-index: 2;

   width: 100%;
   height: 100%;
`

const PrefixStyle = css`
   right: .2em;
`

const SufixStyle = css`
   right: -.2em;
`

const LoadingAnimation = keyframes`
   to {
      transform: rotate(360deg);
   }
`

const LoadingStyle = css`
   svg {
      display: none;
   }

   &::after {
      content: '';
      display: inline-block;

      height: .75rem;
      width: .75rem;
      border-radius: 1rem;

      border-width: .3rem;
      border-style: solid;
      border-color: ${ props => props.theme.name === 'dark' ? 'rgba(0,0,0,.2)' : 'rgba(255,255,255,.35)' };
      border-top-color: ${ props => props.theme.name === 'dark' ? 'rgba(0,0,0,.6)' : 'rgba(255,255,255,1)' };

      margin-left: .5em;
      
      animation: ${LoadingAnimation} 1s linear infinite;
   }
`

export const Button = styled.button`
   user-select: none;
   position: relative;
   z-index: 1;

   height: 3em;
   width: ${ props => props.width? props.width : 'max-content' };
   
   display: flex;
   align-items: center;
   justify-content: center;
   
   padding: 0 3em;
   border-radius: 2em;
   border: 0;

   font-size: 1em;
   
   background: ${ props => props.theme.colors.primary };
   color: ${ props => props.theme.colors.background };

   &:hover {
      cursor: pointer;
      opacity: .75;
   }

   
   svg {
      font-size: 1.5em;
      position: relative;
      ${ props => props.prefix ? PrefixStyle : '' };
      ${ props => props.sufix ? SufixStyle : '' };
   }

   ${ props => props.loading ? LoadingStyle : '' };

   transition: .3s;
`

export const Loading = styled.span`

`