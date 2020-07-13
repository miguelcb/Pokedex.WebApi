import React, { ChangeEvent } from "react";
import "./PokemonList.css";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import classes from "*.module.css";
import { PokemonService } from "../shared/services/PokemonService";
import { Pokemon } from "../shared/models/Pokemon";
import { TextField } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export class PokemonList extends React.Component<any, { pokemons: Pokemon[] }>
{
    constructor(props: any) {
        super(props);
        this.state = { pokemons: [] };
    }

    componentDidMount() {
        PokemonService.getList().then(pokemons => this.setState({ pokemons }));
    }

    onSearch(event: ChangeEvent<HTMLInputElement>) {
        PokemonService.getList(event.target.value).then(pokemons => this.setState({ pokemons }));
    }

    render() {
        const { pokemons } = this.state;

        return <div className="pokemon-list">

            <TextField id="outlined-basic" onChange={this.onSearch.bind(this)} label="Buscar..." variant="outlined" />
            <Grid container spacing={3}>
                {pokemons.map(p =>
                    <Grid key={p.id} item xs>
                        <Paper>
                            <Link to={`/pokemons/${p.id}`}>
                                <img src={p.imageThumbUrl} />
                                <b>#{p.id}</b>
                                <div>{p.name}</div>
                            </Link>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </div>
    }
}