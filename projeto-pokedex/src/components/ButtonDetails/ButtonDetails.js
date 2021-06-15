import React from 'react';
import { useHistory } from 'react-router';
import { goToDetails } from '../../Route/coordinator';


export default function ButtonDetails() {
    const history = useHistory()

    return (
        // irá acessar detalhes do pokemon pela ID
        <button  onClick={() => goToDetails(history)}>
            Ver detalhes
        </button>
    )
} 