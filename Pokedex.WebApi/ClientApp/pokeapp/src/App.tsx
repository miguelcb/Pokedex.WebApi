import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PokemonList } from './components/PokemonList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PokemonDetail from './components/PokemonDetail';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <PokemonList />
                    </Route>
                    <Route path="/pokemons/:pokemonId">
                        <PokemonDetail />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
