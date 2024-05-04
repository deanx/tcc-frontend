import React from 'react';

import {
    Center,
    Box,
    Text,
    AspectRatio
  } from '@chakra-ui/react';

function Video(props) {
    return (
        <>
        Vídeo
        <Center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AftV5IVwJjs?si=AA-RQVWC111mDkpl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Center>
        <button onClick={() => props.setActiveStep(5)}>ir para perguntas finais</button>
        </>
    );
}

export default Video;

