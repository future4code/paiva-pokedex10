import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import ButtonDetails from '../ButtonDetails/ButtonDetails';
import { ButtonContainer, Card } from './styled';

const PokedexCard = ({pokemon}) => {

    const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext)

    const removeFromPokedex = (pokeToRemove) => {
        const index = pokemons.findIndex((PokemonInAdd) => {
            if (PokemonInAdd === pokeToRemove) {
                const pokemonCopy = [...pokedex, pokeToRemove]
                setPokedex(pokemonCopy)
                return true
            } else {
                return false
            }
        })
        const filterPoke = [... pokemons]
        filterPoke.splice(index, 1)
        setPokemons(filterPoke)
        
    }

    return (
        <div>
            <Card key={pokemon.name}>
                <div>
                    <p>{pokemon.name}</p>
                        {pokemon.sprites && pokemon.sprites.front_default ? (
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />) : (
                        <p>Loading...</p>
                    )}
            </div>

            <ButtonContainer>              
                <button onClick={() => removeFromPokedex()}>Remover</button>
                <ButtonDetails value={pokemon.name}>Detalhes</ButtonDetails>
            </ButtonContainer>
        </Card>
        </div>

    )
}

export default PokedexCard