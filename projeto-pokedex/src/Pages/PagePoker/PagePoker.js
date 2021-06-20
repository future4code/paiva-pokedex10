import React, { useContext } from 'react'
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import { Header } from './styled';
import PokedexCard from '../../components/PokeCard/PokedexCard';
import { Logo, BodyHome, ButtonContainerHome } from '../Home/styled';
import imgLogo from '../../img/Logo_POKEDEX.png'
import GlobalStateContext from '../../global/GlobalStateContext';

const PagePoke = () => {

  const {pokedex} = useContext(GlobalStateContext)
  
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
        {pokedex.map((poke) => {
          return <PokedexCard 
            pokemon={poke}
          />
        })}
        
      </BodyHome>
      
    </div>
  );
}

export default PagePoke;