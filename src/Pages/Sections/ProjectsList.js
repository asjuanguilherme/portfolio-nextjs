import React from 'react'

import ProjectCard from '../../Components/Cards/ProjectCard'

const ProjectsList = () => {
   const projects = [
      {
         name: 'Projeto 1',
         tecnologies: 'html, css, javascript',
         url: 'https://google.com.br',
         navLink: null,
         img: 'https://images-americanas.b2w.io/produtos/01/00/oferta/19358/1/19358143_1GG.jpg',
      },
      {
         name: 'Projeto 2',
         tecnologies: 'react, sass, node.js, rest',
         url: 'https://google.com.br',
         navLink: null,
         img: 'https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp',
      },
      {
         name: 'Projeto 2',
         tecnologies: 'react, sass, node.js, rest',
         url: 'https://google.com.br',
         navLink: null,
      },
      {
         name: 'Projeto 2',
         tecnologies: 'react, sass, node.js, rest',
         url: 'https://google.com.br',
         navLink: null,
      },
      {
         name: 'Projeto 2',
         tecnologies: 'react, sass, node.js, rest',
         url: 'https://google.com.br',
         navLink: null,
      },
      {
         name: 'Projeto 2',
         tecnologies: 'react, sass, node.js, rest',
         url: 'https://google.com.br',
         navLink: null,
      },
      {
         name: 'Projeto 2',
         tecnologies: 'react, sass, node.js, rest',
         url: 'https://google.com.br',
         navLink: null,
      },
      {
         name: 'Projeto 2',
         tecnologies: 'react, sass, node.js, rest',
         url: 'https://google.com.br',
         navLink: null,
      },
      {
         name: 'Projeto 2',
         tecnologies: 'react, sass, node.js, rest',
         url: 'https://google.com.br',
         navLink: null,
      },
      {
         name: 'Projeto 2',
         tecnologies: 'react, sass, node.js, rest',
         url: 'https://google.com.br',
         navLink: null,
      },
      {
         name: 'Projeto 2',
         tecnologies: 'react, sass, node.js, rest',
         url: 'https://google.com.br',
         navLink: null,
      },
      {
         name: 'Projeto 2',
         tecnologies: 'react, sass, node.js, rest',
         url: 'https://google.com.br',
         navLink: null,
      },
      {
         name: 'Projeto 2',
         tecnologies: 'react, sass, node.js, rest',
         url: 'https://google.com.br',
         navLink: null,
      },
      {
         name: 'Projeto 2',
         tecnologies: 'react, sass, node.js, rest',
         url: 'https://google.com.br',
         navLink: null,
      },
      {
         name: 'Projeto 2',
         tecnologies: 'react, sass, node.js, rest',
         url: 'https://google.com.br',
         navLink: null,
      },
      {
         name: 'Projeto 2',
         tecnologies: 'react, sass, node.js, rest',
         url: 'https://google.com.br',
         navLink: null,
      },
   ]

   const renderProjects = () => {
      const renderedProjects = projects.map( ({ name, tecnologies, url, img, navLink }) => {
         return (
            <ProjectCard
               name={ name }
               tecnologies={ tecnologies }
               url={ url }
               href={ navLink }
               img={ img }
            />
         )
      })
      
      return renderedProjects
   }

   return renderProjects()
}

export default ProjectsList
