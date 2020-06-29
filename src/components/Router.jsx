import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Forecaster from './Forecaster';
import MainMap from './MainMap';


const Router = () => {

    return (
    <BrowserRouter>
        
        <Switch>
            
            <Route exact path="/" component={LandingPage} />
            <Route path="/forecaster" component={Forecaster} />
            <Route path="/main-map" component={MainMap} />

        </Switch>
    
    </BrowserRouter>
)
}


export default Router;