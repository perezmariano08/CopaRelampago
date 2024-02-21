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
import Stats from '../pages/Stats/Stats'
import Layout from '../components/Layout/Layout'
import MatchStats from '../pages/MatchStats/MatchStats'
import PrivateLayout from '../components/PrivateLayout/PrivateLayout'
import News from '../pages/News/News'

const Routes = () => {
    return (
        <BrowserRouter>
            <ReactDomRoutes>
                <Route path='/onboarding' element={<Layout> <Onboarding/> </Layout>} />
                <Route path='/' element={<PrivateLayout> <Home/> </PrivateLayout> } />
                <Route path='/login' element={<Layout> <Login/> </Layout>  }/>
                <Route path='/create-account' element={<Layout> <CreateAccount/> </Layout>  }/>
                <Route path='/my-team' element={ <PrivateLayout> <MyTeam/> </PrivateLayout>  }/>
                <Route path='/stats' element={<PrivateLayout> <Stats/> </PrivateLayout>  }/>
                <Route path='/stats-match' element={<PrivateLayout> <MatchStats/> </PrivateLayout>  }/>
                <Route path='/news' element={<PrivateLayout> <News/> </PrivateLayout>  }/>

            </ReactDomRoutes>
        </BrowserRouter>
    )
}

export default Routes