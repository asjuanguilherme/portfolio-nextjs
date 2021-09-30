import React from 'react'

import * as S from './styles'

import SectionButton from './SectionButton/SectionButton'

const SectionTemplate = ({ title, subTitle, children, button }) => {

   return (
      <S.Section>
         { ( title || subTitle || button ) &&
         <S.Header>
            { (title || subTitle) &&
               <S.TitleWrapper>
                  { title &&
                     <S.Title>{ title }</S.Title>
                  }
                  { subTitle &&
                     <S.SubTitle>{ subTitle }</S.SubTitle>
                  }
               </S.TitleWrapper>
            }
            { button &&
               <S.ButtonHeader>
                  <SectionButton settings={ button } />
               </S.ButtonHeader>
            }
         </S.Header> }

         <S.Content>
            { children }
         </S.Content>
         { button &&
            <S.Footer>
                  <S.ButtonFooter>
                     <SectionButton settings={ button } />
                  </S.ButtonFooter>
            </S.Footer>
         }
      </S.Section>
   )
}

export default SectionTemplate
