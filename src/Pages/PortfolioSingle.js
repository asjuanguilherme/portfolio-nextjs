import React from 'react'
import { useParams } from 'react-router'
import Styled from 'styled-components'
import parse from 'html-react-parser'

import SkillList from '../Components/Skill/SkillList'
import Container from '../Layout/Container'

import Page from '../Layout/Page'
import Section from '../Layout/Section/Section'
import Text from '../Layout/Text'
import Error from '../Components/UiElements/Error'

//Section Components
import Slider from '../Components/Slider/Slider'
import SmartLink from '../Components/Link/SmartLink'
import Loading from '../Components/UiElements/Loading'

const SkillsListContainer = Styled.div`
   max-width: 600px;
   display: grid;
   row-gap: 1em;
   column-gap: 3em;
   padding-left: 2.5em;
   grid-template-columns: 1fr 1fr 1fr 1fr;

   @media screen and (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
   }

   @media screen and ( max-width: 768px ) {
      grid-template-columns: 1fr 1fr;
   }
`

const SmartLinkContainer = Styled.div`
   margin: 1.5rem 0;
`

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
               <SmartLinkContainer>
                  <SmartLink href={ contentFetch.data.url } target="_blank" label="Acessar projeto" size={ 1.3 } />
               </SmartLinkContainer>
            }

         </Container>
      </Section>

      <Section
         subTitle="Habilidades Envolvidas"
      >
         <SkillsListContainer>
            <SkillList skillsList={ contentFetch.data.skills } />
         </SkillsListContainer>
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
