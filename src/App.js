import './App.css'
import React from 'react'

import Layout from './Layout/Layout'
import MenuMobile from './Components/Menu/MenuMobile'

//Pages
import Home from './Pages/Home'
import About from './Pages/About'

const App = () => {
   const [menuStatus, setMenuStatus] = React.useState(false)

   return (
      <>
         <MenuMobile menuStatus={ menuStatus } menuController={ setMenuStatus } />
         <Layout menuStatus={ menuStatus } menuController={ setMenuStatus }>
            {/* <Home /> */}
            <About />
         </Layout>
      </>
   )
}

export default App
