import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'

import Layout from './Layout/Layout'
import MenuMobile from './Components/Menu/MenuMobile'

//Pages
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import PortfolioSingle from './Pages/PortfolioSingle'
import Contact from './Pages/Contact'
import { dark, light } from './Themes/themes'

const App = ({ currentTheme }) => {
   const [menuStatus, setMenuStatus] = React.useState(false)

   const returnCurrentTheme = _ => {
      if( currentTheme === 'light' ) return light
      if( currentTheme === 'dark' ) return dark
   }

   return (
      <ThemeProvider theme={ returnCurrentTheme } >
         <Router>
            <MenuMobile menuStatus={ menuStatus } menuController={ setMenuStatus } />
            <Layout menuStatus={ menuStatus } menuController={ setMenuStatus }>
            <Switch>
               <Route path="/" exact component={ Home } />
               <Route path="/sobre" component={ About } />
               <Route path="/portfolio" component={ Portfolio } />
               <Route path="/contato" component={ Contact } />
               <Route path="/portfoliosingle" component={ PortfolioSingle } />
            </Switch>
            </Layout>
         </Router>
      </ThemeProvider>
   )
}

const mapStateToProps = state => {
   return {
      currentTheme: state.currentTheme
   }
}

export default connect(
   mapStateToProps
)(App)
