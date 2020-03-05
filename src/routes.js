import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import Movie from './pages/movie';
import Err from './pages/error';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/movie/:id" component={Movie}/>
                <Route path="*" component={Err}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;