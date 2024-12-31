import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Homescreen from '../screens/home'
import Aboutscreen from '../screens/about'
import Contactscreen from '../screens/contact'
import Settingsscreen from '../screens/setting'
import Invalidscreen from '../screens/invalid'
import Navbar from '../nav_bar/navbar'
import Product from '../screens/product'
import Doctorscreen from '../screens/doctor'
import Engineerscreen from '../screens/endineers'
import { Suspense } from 'react'

const LazySetting = React.lazy(() => import('../screens/setting'));
function Stack(){
return (
    <BrowserRouter>
    <Routes>
        {/* <Route path='/' Component={Homescreen}></Route> */}
        <Route path='/' element={<Homescreen/>} ></Route> 
        {/* /* new feature element = {imported component name } */ }
        <Route path='/about' Component={Aboutscreen}></Route>
        <Route path='/contact' Component={Contactscreen}>
             <Route path='doctors' element={<Doctorscreen/>}></Route>
             <Route path='engineers' element={<Engineerscreen/>}></Route>
        </Route>
        <Route path='/settings' Component={ <Suspense fallback={<div>loading</div>}>
          <LazySetting></LazySetting>
        </Suspense>}>
        </Route>
        <Route path='*' Component={Invalidscreen}></Route>
        <Route path='/:location/:restarauntid/info' Component={Product}></Route>
    </Routes>
    </BrowserRouter>
)
}



export default Stack;