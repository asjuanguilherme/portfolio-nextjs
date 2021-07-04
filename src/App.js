import './App.css'
import React from 'react'

import Layout from './Layout/Layout'
import MenuMobile from './Components/Menu/MenuMobile'

//Pages
import Home from './Pages/Home'

const App = () => {
   const [menuStatus, setMenuStatus] = React.useState(false)

   return (
      <>
         <MenuMobile menuStatus={ menuStatus } menuController={ setMenuStatus } />
         <Layout menuStatus={ menuStatus } menuController={ setMenuStatus }>
            <Home />
         </Layout>
      </>
   )
}

export default App
