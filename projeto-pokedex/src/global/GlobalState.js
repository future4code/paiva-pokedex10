import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/url';
import GlobalStateContext from './GlobalStateContext';

const GlobalState = (props) => {

    const [pokemonNames, setPokemonNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        getPokemonNames()
    }, [])

    useEffect(() => {
        const addDetails = []
        pokemonNames.forEach((pokemon) => {
            axios.get(pokemon.url)
            .then((res) => {
                addDetails.push(res.data)
                if (addDetails.length === 20) {
                    const orderedList = addDetails.sort((a, b) => {
                        return a.id - b.id
                    })
                    setPokemons(orderedList)
                }
            })
            .catch((err) => {
                alert(err)
            })
        })
    }, [pokemonNames])

    const getPokemonNames = () => {
        axios.get(`${BASE_URL}/pokemon`)
        .then((res) => {
            setPokemonNames(res.data.results)
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    const data = {pokemons, setPokemons, pokedex, setPokedex}

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState