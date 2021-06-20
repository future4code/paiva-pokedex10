import React, { useState, useEffect } from 'react'
import { goBack, goToPoke } from '../../Route/coordinator';
import { useHistory } from 'react-router';
import { Header, ContainerGrid, ImgFront, ImgBack, Stats, Type, Moves } from './styled';
import axios from 'axios';
import { useParams } from 'react-router';
import { ButtonContainerHome, Logo, BodyHome } from '../Home/styled'
import imgLogo from '../../img/Logo_POKEDEX.png'
import { BASE_URL } from '../../constants/url';

const PageDetails = () => {
  const history = useHistory()

  const params = useParams()
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    const getPokemon = () => {

      axios.get(`${BASE_URL}/pokemon/${params.name}`)
        .then((res) => {
          setPokemon(res.data)
        })
        .catch((err) => {
          alert(err.data)
        });
    };
    getPokemon();
  }, [setPokemon, params.name]);


  return (
    <div>
     
      <Header>
        <Logo>
          <img src={imgLogo} alt={"Pokedex"} />
        </Logo>
        <ButtonContainerHome>
          <button onClick={() => goBack(history)}>Voltar</button>
          <button onClick={() => goToPoke(history)}>Ir Pokédex</button>
        </ButtonContainerHome>
        
      </Header>
      <BodyHome>

      <ContainerGrid key={pokemon.name}>
        <ImgFront>
          {pokemon.sprites && pokemon.sprites.front_default ? (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />) : (
            <p>Loading...</p>
          )}
        </ImgFront>

        <ImgBack>
           {pokemon.sprites && pokemon.sprites.back_default ? (
            <img src={pokemon.sprites.back_default} alt={pokemon.name} />) : (
            <p>Loading...</p>
          )}
        </ImgBack>

        <Stats>
          <h2>Poderes</h2>
          {pokemon.stats ? (pokemon.stats.map((stat) => {
            return (
              <p>
                <strong>{stat.stat.name}:</strong>
                {stat.base_stat}
              </p>
            )
          })) : (<p>Loading...</p>)}
        </Stats>

        <Type>
          <h2>Tipo</h2>
          {pokemon.types ? (pokemon.types.map((type) => {
            return (
              <p>
                <strong>{type.type.name}</strong>
              </p>
            )
          })) : (<p>Loading...</p>)}
        </Type>

        <Moves>
          <h2>Principais ataques</h2>
          {pokemon.moves ? (pokemon.moves.filter((item, index) => {
            return index < 5
          }).map((move) => {
            return (
              <p>
                {move.move.name}
              </p>
            )
          })) : (<p>Loading...</p>)}
        </Moves>

      </ContainerGrid>
      </BodyHome>
    </div>
  );
}

export default PageDetails;