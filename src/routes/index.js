import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import DrinkDetailsPage from "../pages/DrinkDetailsPage";
import AuthPage from "../pages/Auth";
import SignUpPage from "../pages/SignUpPage";
import PasswordResetPage from "../pages/PasswordReset";
import LogOut from "../pages/LogOut";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/search/:id" component={DrinkDetailsPage} />
            <Route exact path="/login" component={AuthPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/password-reset" component={PasswordResetPage} />
            <Route exact path="/logout" component={LogOut} />
            <Route component={HomePage} />
        </Switch>
    );
}