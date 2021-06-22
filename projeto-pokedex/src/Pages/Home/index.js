import React, { useContext } from 'react'
import ButtonPokedex from '../../components/ButtonPokedex/ButtonPokedex';
import PokeCard from '../../components/PokeCard/PokeCard';
import { Header, TextHome } from './styled';
import { MainContainer, BodyHome, Logo, ButtonContainerHome } from '../Home/styled'
import imgLogo from "../../img/Logo_POKEDEX.png";
import GlobalStateContext from '../../global/GlobalStateContext';


const Home = () => {
    const {pokemons} = useContext(GlobalStateContext)
    
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
                    Lista de Pokédex
                </TextHome>
                <MainContainer>
                    {pokemons.map((poke) => {
                        return <PokeCard key={poke.name}
                            pokemon={poke}
                        />
                    })}
                </MainContainer>
            </BodyHome>


        </div>
    );
}

export default Home;