import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ButtonDetails from '../ButtonDetails/ButtonDetails';
import { ButtonContainer, Card } from './styled';

const PokedexCard = (props) => {
    const pokeURL = "https://pokeapi.co/api/v2/pokemon"

    const {PokemonCard, setPokemonCard} = props
    const [pokeRequest, setPoke] = useState({})

    const pokedex = PokemonCard.map((poke) => {
 
        return (
        <Card key={poke.name}>
            <div>
                <p>{poke.name}</p>
                    {/* {pokeRequest.sprites && pokeRequest.sprites.front_default ? (
                        <img src={pokeRequest.sprites.front_default} alt={pokeRequest.name} />) : (
                        <p>Loading...</p>
                    )} */}
            </div>

            <ButtonContainer>              
                <button>Remover</button>
                <ButtonDetails>Detalhes</ButtonDetails>
            </ButtonContainer>
        </Card>
        )
    })
    return (
        <div>
            {pokedex}
        </div>

    )
}

export default PokedexCard