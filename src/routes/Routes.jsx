import React from 'react'
import {
    BrowserRouter,
    Routes as ReactDomRoutes,
    Route
} from "react-router-dom"
import Onboarding from '../pages/Onboarding/Onboarding'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import CreateAccount from '../pages/CreateAccount/CreateAccount'

const Routes = () => {
    return (
        <BrowserRouter>
            <ReactDomRoutes>
                <Route path='/onboarding' element={<Onboarding/>} />
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/create-account' element={<CreateAccount/>}/>
            </ReactDomRoutes>
        </BrowserRouter>
    )
}

export default Routes