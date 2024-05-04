import React from 'react';

import {
    Box,
    Text,
  } from '@chakra-ui/react';

function PerguntasFinais(props) {
    return (
        <>
        Perguntas Finais
        <button onClick={() => props.setActiveStep(6)}>Ir para Agradecimento</button>
        </>
    );
}

export default PerguntasFinais;

