import React from 'react';
import ButtonDetails from '../ButtonDetails/ButtonDetails';
import { Card } from './styled';

export default function PokeCard() {
    return (

        <Card>
            <div>
                PokeCard
            </div>
            <div>
                {/* Botão muda de acordo com a página em que estiver*/}
                <button>Adicionar ou remover</button>
                <ButtonDetails/>
            </div>
        </Card>
    )
}