import styled from 'styled-components'

export const Header = styled.header`
   @media screen and (max-width: 750px) {
      width: 100vw;
      height: 75px;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 100;
      border-radius: 0 0 18px 18px;
      box-shadow: 5px 0 26px rgb(0 0 0 / 10%);
      background-color: ${ props => props.theme.colors.secondaryBackground };
      display: flex;
      align-items: center;
      touch-action: pan-y;
   }
`