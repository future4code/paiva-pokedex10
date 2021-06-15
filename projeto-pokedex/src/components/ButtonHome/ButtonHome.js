import React from 'react';
import { useHistory } from 'react-router';
import { goToHome } from '../../Route/coordinator';

export default function ButtonHome() {
    const history = useHistory()

    return (
        <button  onClick={() => goToHome(history)}>
            Lista de pokemons
        </button>
    )
} 