import React from 'react'
import ProjectCard from './Card/Card'

const ProjectsCardsList = ({ limit = 9999, preloaderLimit = 3 }) => {

   const preloaderData = (preloaderLimit) => {
      const data = []

      for( let i = 0; i < preloaderLimit; i++ ) {
         data.push({ preloader: true })
      }

      return data
   }

   const [projectsFetch, setProjectsFetch] = React.useState({
      data: preloaderData(preloaderLimit),
      loading: true,
      error: null,
   })
   
   const setProjectsFetchLoading = ( loadingStatus ) => {  
      setProjectsFetch( previousState => ({
         ...previousState,
         loading: loadingStatus
      }))
   }
   
   const setProjectsFetchData = ( data ) => {
      setProjectsFetch( previousState => ({
         ...previousState,
         data: data
      }))
   }
   
   const setProjectsFetchError = ( errorMessage ) => {
      setProjectsFetch( previousState => ({
         ...previousState,
         error: errorMessage
      }))
   }
   
   React.useEffect(
      () => {
         fetch('https://diana-teste.000webhostapp.com/cms/wp-json/api/projects')
            .then( response => response.json() )
            .then( response => response.filter( a => a.active === true ) )
            .then( data => setProjectsFetchData(data))
            .catch( () => setProjectsFetchError('Houve um erro ao carregar...') )
            .finally( () => setProjectsFetchLoading(false) )
   }, [])


   return projectsFetch.data
      .map( ({ id, name, slug, thumb, description, preloader }) => (
            <ProjectCard
               key={ id }
               id={ id }
               name={ name }
               slug={ slug }
               img={ thumb }
               description={ description }
               preloader={ preloader }
            />
      )
   )
}

export default ProjectsCardsList
