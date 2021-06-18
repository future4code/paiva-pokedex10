import React, { useState } from 'react'
import ButtonPokedex from '../../components/ButtonPokedex/ButtonPokedex';
import PokeCard from '../../components/PokeCard/PokeCard';
import { Header, TextHome } from './styled';
import { MainContainer, BodyHome, Logo, ButtonContainerHome } from '../Home/styled'
import useRequestData from '../../Hooks/Cards';
import imgLogo from "../../img/Logo_POKEDEX.png";


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
        } else {
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
            <BodyHome>
                <Header>
                    <Logo>
                    <img src={imgLogo} alt={"Pokedex"} />
                    </Logo>
                    <ButtonContainerHome>
                        <ButtonPokedex />
                    </ButtonContainerHome>
                </Header>

                <TextHome>
                    <h1>Lista de Pokédex</h1>
                </TextHome>
                <MainContainer>
                    {ListPokedex}
                </MainContainer>
            </BodyHome>


        </div>
    );
}

export default Home;