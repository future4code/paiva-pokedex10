import React, {useState, useEffect} from 'react'
import { goBack } from '../../Route/coordinator';
import { useHistory } from 'react-router';
import { Header, ContainerGrid, ImgFront, ImgBack, Stats, Type, Moves } from './styled';
import axios from 'axios';

const PageDetails = () => {
  const pokeURL = "https://pokeapi.co/api/v2/pokemon"
  const history = useHistory()

  const [pokemon, setPokemon] = useState({})
  useEffect(() => {
    const getPokemon = () => {
      axios.get(`${pokeURL}/pikachu`)
        .then((res) => setPokemon(res.data))
        .catch((err) => console.log(err));
    };
    getPokemon();
  }, [setPokemon, pokeURL]);

  console.log(pokemon)
 
  return (
    <div>
      <Header>
        <button onClick={() => goBack(history)}>Voltar</button>
        <h1>PageDetails</h1> 
        {/* Fazer botão Add e remover como componente ? */}
        <button>Adicionar ou remover da pokedex</button>
      </Header>

      <ContainerGrid>
        <ImgFront>
          Imagem frontal
          {pokemon.sprites && pokemon.sprites.front_default ? (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />  ) : (
          <p>Loading...</p>
        )}
        </ImgFront>

        <ImgBack>
          Imagem de costas
          {pokemon.sprites && pokemon.sprites.back_default ? (
        <img src={pokemon.sprites.back_default} alt={pokemon.name} />  ) : (
          <p>Loading...</p>
        )}
        </ImgBack>

        <Stats>
          Stats
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
          Type
          {pokemon.types ? (pokemon.types.map((type) => {
            return (
              <p>
                <strong>{type.type.name}</strong>
              </p>
          )
          })) : (<p>Loading...</p>)}
        </Type>

        <Moves>
          Moves
          {pokemon.moves ? (pokemon.moves.map((move) => {
            return (
              <p>
                <strong>{move.move.name}</strong>
              </p>
          )
          })) : (<p>Loading...</p>)}
        </Moves>

      </ContainerGrid>
    </div>
  );
}

export default PageDetails;