import React from 'react'

import Head from '../Layout/Head/Head'
import Page from '../Layout/Page/Page'
import MySkills from './Partials/MySkills'
import AboutMe from './Partials/AboutMe'

const About = () => {
   return (
      <>
      <Head title="Sobre" />
      <Page>
         <AboutMe />
         <MySkills/>
      </Page>
      </>
   )
}

export default About
