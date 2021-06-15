import React from 'react'
import { goBack } from '../../Route/coordinator';
import { useHistory } from 'react-router';
import { Header, ContainerGrid, ImgFront, ImgBack, Stats, Type, Moves } from './styled';

const PageDetails = () => {
  const history = useHistory()

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
        </ImgFront>

        <ImgBack>
          Imagem de costas
        </ImgBack>

        <Stats>
          Stats
        </Stats>

        <Type>
          Type
        </Type>

        <Moves>
          Moves
        </Moves>

      </ContainerGrid>
    </div>
  );
}

export default PageDetails;