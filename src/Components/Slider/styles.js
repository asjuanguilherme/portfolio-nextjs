import styled from 'styled-components'

export const SlideImg = styled.div`
   width: 100%;
   padding-bottom: 60%;
   background-color: #ccc;
   border-radius: .8em;
   background-image: url(${({imgUrl}) => imgUrl });
   background-size: cover;
   background-position: center;

   border: 1px solid ${ props => props.theme.colors.empty };
`

export const ThumbsWrapper = styled.div`
   width: 100%;
   margin-top: 1em;

   .swiper-slide {
      border-radius: 1.1em;
      position: relative;
   }

   .swiper-slide-thumb-active {   
      border: 3px solid #6556DF;
   }
`