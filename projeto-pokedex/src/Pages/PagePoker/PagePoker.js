import React, { useContext } from 'react'
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import { Header } from './styled';
import PokedexCard from '../../components/PokeCard/PokedexCard';
import { Logo, BodyHome, ButtonContainerHome, MainContainer,TextHome } from '../Home/styled';
import imgLogo from '../../img/Logo_POKEDEX.png'
import GlobalStateContext from '../../global/GlobalStateContext';

const PagePoke = () => {

  const { pokedex } = useContext(GlobalStateContext)

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
        
          <TextHome>
            Minha Pokédex
          </TextHome>
          <MainContainer>
          {pokedex.map((poke) => {
            return <PokedexCard key={poke.name}
              pokemon={poke}
            />
          })}
        </MainContainer>


      </BodyHome>

    </div>
  );
}

export default PagePoke;