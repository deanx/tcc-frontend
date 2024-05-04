import React from 'react';

import {
    Box,
    Text,
  } from '@chakra-ui/react';

function IdentificacaoAceite(props) {
    return (
        <>
        Identificao e Aceite
        <button onClick={() => props.setActiveStep(3)}>ir para perguntas iniciais</button>
        </>
    );
}

export default IdentificacaoAceite;

