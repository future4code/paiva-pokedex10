import React from 'react'
import ButtonPokedex from '../../components/ButtonPokedex/ButtonPokedex';
import PokeCard from '../../components/PokeCard/PokeCard';
import { Header } from './styled';

const Home = () => {
  return (
    <div>
      <Header>
        <ButtonPokedex/>
        <h1>Home</h1>
      </Header>
      <PokeCard/>
    </div>
  );
}

export default Home;