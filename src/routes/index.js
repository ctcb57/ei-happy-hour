import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import DrinkDetailsPage from "../pages/DrinkDetailsPage";
import AuthPage from "../pages/Auth";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/search/:id" component={DrinkDetailsPage} />
            <Route exact path="/login" component={AuthPage} />
            <Route component={HomePage} />
        </Switch>
    );
}