import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../Pages/Home';
import PageDetails from '../Pages/PageDetails/PageDetails';
import PagePoke from '../Pages/PagePoker/PagePoker';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true}>
                    <Home />
                </Route>

                <Route path="/poke" exact>
                    <PagePoke />
                </Route>

                <Route path="/details" exact>
                    <PageDetails />
                </Route>

                <div>Erro 404
              </div>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;