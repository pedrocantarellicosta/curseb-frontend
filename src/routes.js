import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Classes from './pages/classes';
 import About from './pages/about';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route path="/course/:id" component={Classes} />
        </Switch>
    </BrowserRouter>
);

export default Routes;