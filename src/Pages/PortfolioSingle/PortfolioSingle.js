import React from 'react'
import { useParams } from 'react-router'

import * as S from './styles'

import parse from 'html-react-parser'

import SkillList from '../../Components/Skill/SkillList'
import Container from '../../Layout/Container/Container'

import Page from '../../Layout/Page/Page'
import Section from '../../Layout/Section/Section'
import Text from '../../Layout/Text/Text'
import Error from '../../Components/States/Error/Error'

import Button from '../../Components/Buttons/Button'
import { BsLink45Deg } from 'react-icons/bs'

//Section Components
import Slider from '../../Components/Slider/Slider'
import Loading from '../../Components/States/Loading/Loading'

const Home = () => {

   const params = useParams()

   const [contentFetch, setContentFetch] = React.useState({
      data: {
         images: []
      },
      loading: true,
      error: null,
   })
   
   const setContentFetchLoading = ( loadingStatus ) => {  
      setContentFetch( previousState => ({
         ...previousState,
         loading: loadingStatus
      }))
   }
   
   const setContentFetchData = ( data ) => {
      setContentFetch( previousState => ({
         ...previousState,
         data: data
      }))
   }
   
   const setContentFetchError = ( errorMessage ) => {
      setContentFetch( previousState => ({
         ...previousState,
         error: errorMessage
      }))
   }

   React.useEffect(
      () => {
         fetch(`https://diana-teste.000webhostapp.com/cms/wp-json/api/project/${params.slug}`)
            .then( response => response.json() )
            .then( data => setContentFetchData(data))
            .catch( () => setContentFetchError('Houve um erro ao carregar esse conteúdo...') )
            .finally( () => setContentFetchLoading(false) )
   }, [ params.slug ])

   if( contentFetch.error ) return <Error type={ 404 } >{ contentFetch.error }</Error>

   if( contentFetch.loading ) return <Loading />

   return (
      <Page
         title={ contentFetch.data.name }
         returnTo={'/portfolio'}
      >
      <Section>
         <Container>
            <Text >
               { parse(contentFetch.data.content) }
            </Text>

            { contentFetch.data.url &&
               <S.SmartLinkWrapper>
                  <Button href={ contentFetch.data.url } target="_blank" label="Acessar projeto" prefix={ <BsLink45Deg /> } />
               </S.SmartLinkWrapper>
            }

         </Container>
      </Section>

      <Section
         subTitle="Habilidades Envolvidas"
      >
         <S.SkillsListWrapper>
            <SkillList skillsList={ contentFetch.data.skills } />
         </S.SkillsListWrapper>
      </Section>
      
      { contentFetch.data.images &&
         <Section subTitle="Fotos">
            <Slider slidesUrlArray={ contentFetch.data.images } />
         </Section>
      }

      </Page>
   )
}

export default Home
