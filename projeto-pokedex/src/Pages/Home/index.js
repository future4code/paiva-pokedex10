import React, { useState } from 'react'
import ButtonPokedex from '../../components/ButtonPokedex/ButtonPokedex';
import PokeCard from '../../components/PokeCard/PokeCard';
import { ButtonContainer } from '../../components/PokeCard/styled';
import { Header } from './styled';
import { MainContainer } from '../Home/styled'
import useRequestData from '../../Hooks/Cards';


const Home = () => {
    const poke = useRequestData([], 'https://pokeapi.co/api/v2/pokemon')
    const [PokemonCard, setPokemonCard] = useState([])
    
    const addPokemon = (PokemonToAdd) => {

        console.log("poke to add:", PokemonToAdd.name)
        const index = PokemonCard.findIndex((PokemonInAdd) => {
            if (PokemonInAdd.name === PokemonToAdd.name) {
                return true
            } else {
                return false
            }
        })
        
        console.log("index:", index)
        if (index === -1) {
            const pokeInPokedex = {... PokemonToAdd, taken: true}
            const pokemonCopy = [...PokemonCard, pokeInPokedex]
            setPokemonCard(pokemonCopy)
        }else {
            console.log('ENTRAR NO CARRINHO')
        }

    }
        
    const ListPokedex = poke.map((poke) => {
        return <PokeCard
            PokeInfo={poke}
            addPokemon={addPokemon} />
    })

    return (
        <div>

            <Header>
                <ButtonContainer>
                    <ButtonPokedex />
                </ButtonContainer>

                <h1>Lista de Pokédex</h1>

            </Header>
            <MainContainer>
                {ListPokedex}
            </MainContainer>

        </div>
    );
}

export default Home;