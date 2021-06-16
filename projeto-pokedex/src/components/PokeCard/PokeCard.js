import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ButtonDetails from '../ButtonDetails/ButtonDetails';
import { ButtonContainer, Card } from './styled';

 const PokeCard = (props) => {
     const pokeURL = "https://pokeapi.co/api/v2/pokemon"
     
     const [pokemon,setPokemon] = useState ({})

     useEffect (() => {
         const getPokemon = () =>{ 

         axios.get (`${pokeURL}/${props.PokeInfo.name}`)
         .then ((res) => 
         setPokemon (res.data))
         .catch ((err) => 
          alert (err));
     };
     
     getPokemon();
    }, [setPokemon, pokeURL]);

      return (
        <div>
            <Card>
                <div>
                    <p>{props.PokeInfo.name} </p>
                    {pokemon.sprites && pokemon.sprites.front_default ? (
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/> ) : (
                        <p>Loading...</p>
                    )}
                </div>

                <ButtonContainer>
                    <button>Adicionar</button>
                    <ButtonDetails>Detalhes</ButtonDetails>
                </ButtonContainer>
            </Card>
        </div>

    )
}

export default PokeCard