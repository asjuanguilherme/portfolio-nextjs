import React from 'react'

import Head from '../Layout/Head'
import Page from '../Layout/Page'

import MySkills from './Sections/MySkills'

const About = () => {
   return (
      <>
      <Head title="Sobre" />
      <Page
         title="Sobre mim"
         description="
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere reprehenderit ut consequatur, dolorum necessitatibus doloremque minima expedita ipsum nostrum eaque, sit iure veniam asperiores, ad quod voluptatum ratione accusantium? Dolorum necessitatibus doloremque minima expedita ipsum nostrum eaque, sit iure veniam asperiores, ad quod voluptatum ratione accusantium?
         "
      >

      <MySkills/>
      </Page>
      </>
   )
}

export default About
