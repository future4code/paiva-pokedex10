import React from 'react';
import { useHistory } from 'react-router';
import { goToPoke } from '../../Route/coordinator';


export default function ButtonPokedex() {
    const history = useHistory()

    return (
        <button  onClick={() => goToPoke(history)}>
            Minha Pokedéx
        </button>
    )
} 