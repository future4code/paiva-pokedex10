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


        const index = PokemonCard.findIndex((PokemonInAdd) => {
            if (PokemonInAdd.id === PokemonToAdd.id) {
                return true
            } else {
                return false
            }
        })

        if (index === 0) {
            console.log(PokemonToAdd)
            const pokemonCopy = [...PokemonCard, PokemonToAdd]
            setPokemonCard(pokemonCopy)
        }else {
            console.log('ENTRAR NO CARRINHO')
        }


    // useEffect(() => {
    //     axios.get('https://pokeapi.co/api/v2/pokemon/:idDoPokemon')
    //         .then((res) => {
    //             console.log(res.sprites)
    //         })
    // }, [])


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