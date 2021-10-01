import styled from 'styled-components'

export const Wrapper = styled.div`
   display: flex;
   align-items: center;

   width: max-content;
   height: 40px;
   
   font-size: 1.2em;
   color: ${ props => props.theme.colors.text };
   
   transition: .3s;
   cursor: default;
   
   &:hover {
      color: ${ props => props.color };

      ${ props => props.scaleEffect ? 'transform: scale(1.2);' : '' }
   }

   svg {
      margin-right: 0.4em;
      font-size: calc(1.4em * ${ props => props.iconSize ? props.iconSize : 1 });
   }
`

export const Label = styled.h4`
   font-weight: normal;
`