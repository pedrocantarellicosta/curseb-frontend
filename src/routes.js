import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Class from './pages/class';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/course/:id" component={Class} />
        </Switch>
    </BrowserRouter>
);

export default Routes;