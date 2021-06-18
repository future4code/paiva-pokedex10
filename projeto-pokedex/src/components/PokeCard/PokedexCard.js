import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ButtonDetails from '../ButtonDetails/ButtonDetails';
import { ButtonContainer, Card } from './styled';

const PokedexCard = (props) => {
    const {PokemonCard, setPokemonCard} = props
    const pokedexName = PokemonCard.map((poke) => {
        return <p>{poke.name}</p>
    })
    return (
        <div>
            <Card>
                <div>
                    <p>{pokedexName}</p>
                        {/* {pokemon.sprites && pokemon.sprites.front_default ? (
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />) : (
                        <p>Loading...</p>
                    )} */}
                </div>

                <ButtonContainer>              
                    {/* <button onClick={() => props.addPokemon(props.PokeInfo)}>Remover</button> */}
                    {/* <ButtonDetails value={props.PokeInfo.name}>Detalhes</ButtonDetails> */}
                </ButtonContainer>
            </Card>
        </div>

    )
}

export default PokedexCard