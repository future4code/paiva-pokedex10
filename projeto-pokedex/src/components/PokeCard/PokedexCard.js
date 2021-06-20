import React, { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import ButtonDetails from '../ButtonDetails/ButtonDetails';
import { ButtonContainer, Card } from './styled';

const PokedexCard = ({pokemon}) => {

    const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext)

    const removeFromPokedex = (pokeToRemove) => {
        const index = pokemons.findIndex((pokeRemoving) => {
            if (pokeRemoving === pokeToRemove) {
                return true
            } else {
                return false
            }
        })

        const newPokedex = [...pokedex]
        newPokedex.splice(index, 1)
        
        const orderedPokedex = newPokedex.sort((a, b) => {
            return a.id - b.id
        })
        
        const pokemonList = [...pokemons, pokeToRemove]
        const orderedList = pokemonList.sort((a, b) => {
            return a.id - b.id
        })

        setPokedex(orderedPokedex)
        setPokemons(orderedList)
        
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
                <button onClick={() => removeFromPokedex(pokemon)}>Remover</button>
                <ButtonDetails value={pokemon.name}>Detalhes</ButtonDetails>
            </ButtonContainer>
        </Card>
        </div>

    )
}

export default PokedexCard