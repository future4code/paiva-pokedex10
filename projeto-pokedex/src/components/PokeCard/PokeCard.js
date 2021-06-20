import React, { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import ButtonDetails from '../ButtonDetails/ButtonDetails';
import { ButtonContainer, Card } from './styled';

const PokeCard = ({pokemon}) => {
    const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext)

    const addPokemon = (PokemonToAdd) => {
        const index = pokemons.findIndex((PokemonInAdd) => {
            if (PokemonInAdd === PokemonToAdd) {
                const pokeToPokedex = [...pokedex, PokemonToAdd]
                const orderedPokedex = pokeToPokedex.sort((a, b) => {
                    return a.id - b.id
                })
                setPokedex(orderedPokedex)
                return true
            } else {
                return false
            }
        })

        const pokemonList = [...pokemons]
        const orderedList = pokemonList.sort((a, b) => {
            return a.id - b.id
        })

        pokemonList.splice(index, 1)
        setPokemons(orderedList)
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