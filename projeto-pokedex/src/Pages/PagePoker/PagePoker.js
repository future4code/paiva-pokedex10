import React from 'react'
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import { Header } from './styled';
import PokedexCard from '../../components/PokeCard/PokedexCard';
import { Logo, BodyHome, ButtonContainerHome } from '../Home/styled';
import imgLogo from '../../img/Logo_POKEDEX.png'

const PagePoke = (props) => {
  const { PokemonCard, setPokemonCard } = props
  return (
    <div>
      <BodyHome>
      <Header>
        <Logo>
          <img src={imgLogo} alt={"Pokedex"} />
        </Logo>
        <ButtonContainerHome>
        <ButtonHome />
        </ButtonContainerHome>
        
      </Header>
      <PokedexCard PokemonCard={PokemonCard} setPokemonCard={setPokemonCard} />
      </BodyHome>
      
    </div>
  );
}

export default PagePoke;