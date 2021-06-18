import React from 'react'
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import { Header } from './styled';
import PokedexCard from '../../components/PokeCard/PokedexCard';

const PagePoke = (props) => {
  const {PokemonCard, setPokemonCard} = props
  return (
    <div>
      <Header>
        <ButtonHome/>
        <h1>Pokédex</h1>
      </Header>
      <PokedexCard PokemonCard={PokemonCard} setPokemonCard={setPokemonCard}/>
      </div>
  );
}

export default PagePoke;