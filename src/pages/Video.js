import React from 'react';
import {start, stop} from '../libs/VideoRecorderComponent';
import {
    Center,
    Button, Text
  } from '@chakra-ui/react';

function Video(props) {
    setTimeout(() => {
        document.getElementById("aguarde").style.display="none";
        document.getElementById("continuar").style.display="block"
    },2000);
    return (
        <>
        <Text padding={'1em'}>Assista ao vídeo abaixo e depois clique no botão abaixo do vídeo:</Text>
        <Center marginBottom={"0.5em"}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AftV5IVwJjs?si=AA-RQVWC111mDkpl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Center>
        <Center>
            <Button id="aguarde" onClick={() => alert("Por favor aguarde o final do vídeo para continuar...")}>Aguarde o final do filme...</Button>
            <Button display="none" id="continuar" onClick={() => {props.setActiveStep(4);stop({email:window.email,step:3});start()}}>ir para perguntas finais</Button>
        </Center>
        </>
    );
}

export default Video;

