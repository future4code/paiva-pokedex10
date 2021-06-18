import React, {useState} from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../Pages/Home';
import PageDetails from '../Pages/PageDetails/PageDetails';
import PagePoke from '../Pages/PagePoker/PagePoker';


const Router = () => {
    const [PokemonCard, setPokemonCard] = useState([])
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true}>
                    <Home PokemonCard={PokemonCard} setPokemonCard={setPokemonCard} />
                </Route>

                <Route path="/poke" exact>
                    <PagePoke PokemonCard={PokemonCard} setPokemonCard={setPokemonCard} />
                </Route>

                <Route path="/details/:name" exact>
                    <PageDetails />
                </Route>

                <div>Erro 404
              </div>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;