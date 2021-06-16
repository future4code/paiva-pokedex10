import React from 'react'
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import { Header } from './styled';

const PagePoke = () => {
  return (
    <div>
      <Header>
        <ButtonHome/>
        <h1>Pokédex</h1>
      </Header>
      </div>
  );
}

export default PagePoke;