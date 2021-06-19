import React, { useEffect, useState } from 'react'
import ButtonPokedex from '../../components/ButtonPokedex/ButtonPokedex';
import PokeCard from '../../components/PokeCard/PokeCard';
import { Header, TextHome } from './styled';
import { MainContainer, BodyHome, Logo, ButtonContainerHome } from '../Home/styled'
import useRequestData from '../../Hooks/useRequestData';
import imgLogo from "../../img/Logo_POKEDEX.png";


const Home = (props) => {
    const poke = useRequestData([], 'https://pokeapi.co/api/v2/pokemon')
    const {PokemonCard, setPokemonCard} = props
    const [pokemonOutFavorite, setPokemonOutFavorite] = useState([])

    useEffect(() => {
        setPokemonOutFavorite(poke)
      }, [poke])

    const addPokemon = (PokemonToAdd) => {

        const index = PokemonCard.findIndex((PokemonInAdd) => {
            if (PokemonInAdd.name === PokemonToAdd.name) {
                return true
            } else {
                return false
            }
        })
        
        if (index === -1) {
            const pokemonCopy = [...PokemonCard, PokemonToAdd]
            const filterPoke = pokemonOutFavorite.filter((pokeToPokedex) => {
                if (pokeToPokedex === PokemonToAdd) {
                    return false
                }
                return true
            })
            setPokemonCard(pokemonCopy)
            setPokemonOutFavorite(filterPoke)
        } 
    }
    const ListPokedex = pokemonOutFavorite.map((poke) => {
        return <PokeCard
            PokeInfo={poke}
            addPokemon={addPokemon}
            pokemonOutFavorite={pokemonOutFavorite} 
            />
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