import axios from 'axios'
import { Pokemon } from '../models/Pokemon';

export class PokemonService {
    static getList(search?: string) {
        return axios.get<Pokemon[]>(`/api/pokemons/${search ? `search?name=${search}` : ''}`).then(x => x.data);
    }
    static getById(id: number) {
        return axios.get<Pokemon>(`/api/pokemons/id/${id}`).then(x => x.data);
    }
}