import React from 'react';

import {
    Box,
    Text,
  } from '@chakra-ui/react';

function Agradecimento(props) {
    return (
        <>
        Agradecimento
        <button onClick={() => props.setActiveStep(1)}>Recomeçar</button>
        </>
    );
}

export default Agradecimento;

