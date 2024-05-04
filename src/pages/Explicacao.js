import React from 'react';

import {
    Box,
    Text,
  } from '@chakra-ui/react';

function Explicacao(props) {
    return (
        <>
        Explicacao
        <button onClick={() => props.setActiveStep(2)}>Ir para identificacao e aceite</button>
        </>
    );
}

export default Explicacao;

