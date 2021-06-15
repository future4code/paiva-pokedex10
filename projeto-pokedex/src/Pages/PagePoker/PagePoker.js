import React from 'react'
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import PokeCard from '../../components/PokeCard/PokeCard'
import { Header } from './styled';

const PagePoke = () => {
  return (
    <div>
      <Header>
        <ButtonHome/>
        <h1>PagePoke </h1>
      </Header>
      <PokeCard/>
    </div>
  );
}

export default PagePoke;