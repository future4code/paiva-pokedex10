import React from 'react';
import ButtonDetails from '../ButtonDetails/ButtonDetails';
import { ButtonContainer, Card } from './styled';

 const PokeCard = (props) => {
      return (
        <div>
            <Card>
                <div>
                    <p>{props.PokeInfo.name} </p>
                    <img src={props.PokeInfo.url} alt={props.PokeInfo.name}/>
                </div>

                <ButtonContainer>
                    <button>Adicionar</button>
                    <ButtonDetails>Detalhes</ButtonDetails>
                </ButtonContainer>
            </Card>
        </div>

    )
}

export default PokeCard