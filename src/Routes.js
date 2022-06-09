import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Signup from './pages/auth/Signup'
import Signin from './pages/auth/Signin'
import Homepage from './pages/Homepage'
import Cart from './pages/Cart'
import Deals from './pages/Deals'
// import Second from './Second'
// import { Fourth, Third } from './Third'




const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/deals" component={Deals} />
                    {/* <Route exact path="/about" component={Second} />
                    <Route exact path="/service" component={Third} />
                    <Route exact path="/contact" component={Fourth} /> */}

                </Switch>
            </Router>
        </>
    )
}

export default Routes