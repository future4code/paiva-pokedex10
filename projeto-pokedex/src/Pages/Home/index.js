import React, { useContext, useEffect, useState } from 'react'
import ButtonPokedex from '../../components/ButtonPokedex/ButtonPokedex';
import PokeCard from '../../components/PokeCard/PokeCard';
import { Header, TextHome } from './styled';
import { MainContainer, BodyHome, Logo, ButtonContainerHome } from '../Home/styled'
import useRequestData from '../../Hooks/useRequestData';
import imgLogo from "../../img/Logo_POKEDEX.png";
import GlobalStateContext from '../../global/GlobalStateContext';


const Home = () => {
    const {pokemons} = useContext(GlobalStateContext)
    // const poke = useRequestData([], 'https://pokeapi.co/api/v2/pokemon')
    // const {PokemonCard, setPokemonCard} = props
    // const [pokemonOutFavorite, setPokemonOutFavorite] = useState([])

    // useEffect(() => {
    //     setPokemonOutFavorite(poke)
    //   }, [poke])

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
                    {pokemons.map((poke) => {
                        return <PokeCard
                            pokemon={poke}
                        />
                    })}
                </MainContainer>
            </BodyHome>


        </div>
    );
}

export default Home;