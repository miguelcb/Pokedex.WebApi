import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useParams, useHistory } from 'react-router-dom';
import { PokemonService } from '../shared/services/PokemonService';
import { Pokemon } from '../shared/models/Pokemon';
import { Box, LinearProgress, LinearProgressProps, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '0 auto'
    },
});
const MIN = 0;
const MAX = 255;
const normalise = (value: number) => (value - MIN) * 100 / (MAX - MIN);

function LinearProgressWithLabel(props: LinearProgressProps & { valueLabel: number }) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.valueLabel,
                )}`}</Typography>
            </Box>
        </Box>
    );
}

export default function PokemonDetail(props:any) {
    const classes = useStyles();
    const { pokemonId } = useParams();
    let history = useHistory();
    const [pokemonDetail, setPokemonDetail] = useState({} as Pokemon);

    useEffect(() => {
        PokemonService.getById(pokemonId).then(pokemon => {
            setPokemonDetail(pokemon);
        });
    });

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={pokemonDetail.name}
                    height="380"
                    image={pokemonDetail.imageUrl}
                    title={pokemonDetail.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {pokemonDetail.name}
                    </Typography>
                    {pokemonDetail &&
                        <Typography variant="body2" color="textSecondary" component="div">
                            <div>
                                <Box display="flex" flexDirection="column">
                                    <Box display="flex" width="100%" flexDirection="row">
                                        <Box width="30%">
                                            HP
                                    </Box>
                                        <Box width="70%">
                                            <LinearProgressWithLabel valueLabel={pokemonDetail.hitPoints} value={normalise(pokemonDetail.hitPoints)} />
                                        </Box>
                                    </Box>
                                    <Box display="flex" width="100%" flexDirection="row">
                                        <Box width="30%">
                                            Attack
                                    </Box>
                                        <Box width="70%">
                                            <LinearProgressWithLabel valueLabel={pokemonDetail.attack} value={normalise(pokemonDetail.attack)} />
                                        </Box>
                                    </Box>
                                    <Box display="flex" width="100%" flexDirection="row">
                                        <Box width="30%">
                                            Defense
                                    </Box>
                                        <Box width="70%">
                                            <LinearProgressWithLabel valueLabel={pokemonDetail.defense} value={normalise(pokemonDetail.defense)} />
                                        </Box>
                                    </Box>
                                    <Box display="flex" width="100%" flexDirection="row">
                                        <Box width="30%">
                                            Special Atk
                                    </Box>
                                        <Box width="70%">
                                            <LinearProgressWithLabel valueLabel={pokemonDetail.specialAttack} value={normalise(pokemonDetail.specialAttack)} />
                                        </Box>
                                    </Box>
                                    <Box display="flex" width="100%" flexDirection="row">
                                        <Box width="30%">
                                            Special Def
                                    </Box>
                                        <Box width="70%">
                                            <LinearProgressWithLabel valueLabel={pokemonDetail.specialDefense} value={normalise(pokemonDetail.specialDefense)} />
                                        </Box>
                                    </Box>
                                    <Box display="flex" width="100%" flexDirection="row">
                                        <Box width="30%">
                                            Speed
                                    </Box>
                                        <Box width="70%">
                                            <LinearProgressWithLabel valueLabel={pokemonDetail.speed} value={normalise(pokemonDetail.speed)} />
                                        </Box>
                                    </Box>
                                </Box>

                            </div>
                        </Typography>
                    }

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" onClick={history.goBack} color="primary">
                    Atras
                </Button>
            </CardActions>
        </Card>
    );
}