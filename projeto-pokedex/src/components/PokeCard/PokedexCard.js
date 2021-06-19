import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import ButtonDetails from '../ButtonDetails/ButtonDetails';
import { ButtonContainer, Card } from './styled';

const PokedexCard = () => {

    const {pokedex} = useContext(GlobalStateContext)


    // const poketeste = PokemonCard.map((poke) => {
 
    //     return (
    //     <Card key={poke.name}>
    //         <div>
    //             <p>{poke.name}</p>
    //                 {/* {pokeRequest.sprites && pokeRequest.sprites.front_default ? (
    //                     <img src={pokeRequest.sprites.front_default} alt={pokeRequest.name} />) : (
    //                     <p>Loading...</p>
    //                 )} */}
    //         </div>

    //         <ButtonContainer>              
    //             <button>Remover</button>
    //             <ButtonDetails>Detalhes</ButtonDetails>
    //         </ButtonContainer>
    //     </Card>
    //     )
    // })
    return (
        <div>
            Não acabado
        </div>

    )
}

export default PokedexCard