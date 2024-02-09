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
import MyTeam from '../pages/MyTeam/MyTeam'
import Layout from '../components/Layout/Layout'
import { Navbar } from '../components/Navbar/Navbar'
import MenuBottom from '../components/MenuBottom/MenuBottom'

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Layout>
                <ReactDomRoutes>
                    <Route path='/onboarding' element={<Onboarding/>} />
                    <Route path='/' element={<Home/>} />
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/create-account' element={<CreateAccount/>}/>
                    <Route path='/my-team' element={<MyTeam/>}/>
                </ReactDomRoutes>
            </Layout>
            <MenuBottom/>
        </BrowserRouter>
    )
}

export default Routes