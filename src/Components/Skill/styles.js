import styled from 'styled-components'

export const Wrapper = styled.div`
   display: flex;
   width: max-content;
   height: 40px;
   align-items: center;
   transition: .3s;
   font-size: 1.2em;
   color: ${ props => props.theme.colors.text };
   cursor: default;
   &:hover {
      color: ${ props => props.color };

      ${ props => props.scaleEffect ? (
         'transform: scale(1.2);') : ''
      }
   }

   svg {
      margin-right: 0.4em;
      font-size: calc(1.4em * ${({ sizeMultiplier }) => sizeMultiplier ? sizeMultiplier : 1 });
   }
`

export const Label = styled.h4`
   font-weight: normal;
`