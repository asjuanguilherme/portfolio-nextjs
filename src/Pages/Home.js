import React from 'react'

import Page from '../Layout/Page'

import LastProjects from './Sections/LastProjects'

const Home = () => {
   return (
      <Page
         title="Página Inicial"
         description="
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere reprehenderit ut consequatur, dolorum necessitatibus doloremque minima expedita ipsum nostrum eaque, sit iure veniam asperiores, ad quod voluptatum ratione accusantium?
         "
      >
         <LastProjects />

      </Page>
   )
}

export default Home
