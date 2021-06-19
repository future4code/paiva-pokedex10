import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import ButtonDetails from '../ButtonDetails/ButtonDetails';
import { ButtonContainer, Card } from './styled';

const PokeCard = ({pokemon}) => {

    const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext)
    const addPokemon = (PokemonToAdd) => {
        console.log("função")
        const index = pokemons.findIndex((PokemonInAdd) => {
            if (PokemonInAdd.name === PokemonToAdd.name) {
                return true
            } else {
                console.log("else 1")
                return false
            }
        })
        
        console.log(index)
        if (index === -1) {
            const pokemonCopy = [...pokedex, PokemonToAdd]
            const filterPoke = pokemons.filter((pokeToPokedex) => {
                if (pokeToPokedex === PokemonToAdd) {
                    console.log("if 2")
                    return false
                }
                console.log("else 2")
                return true
            })
            setPokedex(pokemonCopy)
            setPokemons(filterPoke)
        } 
    }


    return (
        <div>
            <Card>
                <div>
                    <p>{pokemon.name}</p>
                    {pokemon.sprites && pokemon.sprites.front_default ? 
                    (<img src={pokemon.sprites.front_default} alt={pokemon.name} />) : 
                    ( <p>Loading...</p> )}
                </div>

                <ButtonContainer>                    
                    <button onClick={() => addPokemon(pokemon)}>Adicionar</button>                      
                    <ButtonDetails value={pokemon.name}>Detalhes</ButtonDetails>  
                </ButtonContainer>               

               
            </Card>
        </div>

    )
}

export default PokeCard