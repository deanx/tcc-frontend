import React from 'react';

import {
    Card, Heading, CardHeader, CardBody, CardFooter,
    Text,
  } from '@chakra-ui/react';

function Agradecimento(props) {
    const [aguarde, setAguarde] = React.useState(true);
    setTimeout(() => {
        setAguarde(false);
    }, 15000)
    return (
        <>
        <Card>
                <CardHeader>
                    <Heading size='sm'>Obrigada :)</Heading>
                </CardHeader>
                <CardBody>
                    <Text pt='2' fontSize='sm'>
                    Muito obrigada por dedicar seu tempo para responder à minha pesquisa! Sua colaboração foi simplesmente fantástica e crucial para o sucesso do meu projeto de MBA em Neuromarketing na PUC Rio Grande do Sul. Cada resposta que você compartilhou é inestimável. Sou profundamente grata por tudo!
                    </Text>
                </CardBody>
            </Card>
        {aguarde && <Text fontWeight={'bolder'} size={"xs"}>Aguarde...</Text>}
        {!aguarde && <Text fontWeight={'bolder'} size={"xs"}>Pode fechar a janela...</Text>}
        </>
    );
}

export default Agradecimento;

