import React from 'react'

import * as S from './styles'

import { FaChevronLeft } from 'react-icons/fa'
import Text from '../Text/Text'

const PageTemplate = ({ title, subTitle, children, returnTo, description }) => {

   return (
      <S.Page>

         { ( returnTo || title || subTitle ) &&
            <S.Header>

               { returnTo &&
                  <S.ReturnWrapper>
                     <S.ReturnButton to={ returnTo }>
                        <FaChevronLeft />
                     </S.ReturnButton>
                  </S.ReturnWrapper>
               }
               
               <S.TitleWrapper>
                  { title &&
                     <S.Title>{ title }</S.Title>
                  }
                  { subTitle &&
                     <S.SubTitle>{ subTitle }</S.SubTitle>
                  }
               </S.TitleWrapper>
            </S.Header>
         }

         { description &&
            <S.Description>
               <Text>
               { description }
               </Text>
            </S.Description>
         }
         
         <S.Content>
            { children }
         </S.Content>
      </S.Page>
   )
}

export default PageTemplate
