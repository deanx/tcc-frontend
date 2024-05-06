import React from 'react';
import {start, stop} from '../libs/VideoRecorderComponent';
import { API_URL } from '../constants';
import axios from 'axios';

import {
    Box, VStack,
    Select,
    Text, Checkbox, Input, Radio, RadioGroup, Button
  } from '@chakra-ui/react';

function PerguntasIniciaisII(props) {
    const save = (target) => {
        target.style.display='none';
        document.getElementById("aguarde").style.display='block';

        if([frequencia, quaisRedes, redesMais, tipoConteudoConsome, tipoConteudoCompartilha, marcas, comoDecide, tipoEvita, maisGosta].some(el => el === "")) {
            target.style.display='block'
            document.getElementById("aguarde").style.display='none';
            return alert("Preencha todos os campos");
        }

        let data = JSON.stringify({
            "id": 1,
            "frequencia": frequencia,
            "quais_redes": quaisRedes.toString(),
            "redes_mais": redesMais,
            "tipo_conteudo_consome": tipoConteudoConsome,
            "tipo_conteudo_compartilha": tipoConteudoCompartilha,
            "marcas": marcas,
            "como_decide": comoDecide,
            "tipo_evita": tipoEvita,
            "mais_gosta": maisGosta,
            "email": window.email
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: API_URL + "/perguntas2",
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios.request(config)
          .then((response) => {
            props.setActiveStep(3);
            stop({email:window.email,step:2});
            start();
          })
          .catch((error) => {
            alert("Erro! Revise os dados e tente novamente!")
            target.style.display='block'
            document.getElementById("aguarde").style.display='none';
          });
    }

    const setRedes = (rede, checked, elm) => {
        let redes = quaisRedes;
        if (rede === "outro") {
            redes["outro"] = elm.value;
        }
        else {
            if (checked) {
                redes.push(rede)
            } else {
                redes = redes.filter(el => el != rede)
            }
        }        
        setQuaisRedes(redes)
    }
    const [frequencia, setFrequencia] = React.useState("");
    const [quaisRedes, setQuaisRedes] = React.useState([]);
    const [redesMais, setRedesMais] = React.useState("");
    const [tipoConteudoConsome, setTipoConteudoConsome] = React.useState("");
    const [tipoConteudoCompartilha, setTipoConteudoCompartilha] = React.useState("");
    const [marcas, setMarcas] = React.useState("")
    const [comoDecide, setComoDecide] = React.useState("")
    const [tipoEvita, setTipoEvita] = React.useState("")
    const [maisGosta, setMaisGosta] = React.useState("")
    return (
        <>
            <VStack alignItems={"left"} textAlign="left">
                <Box className='box-pergunta'>
                    <Text>Com que frequência você utiliza redes sociais?</Text>
                    <Select size='xs' placeholder='Selecione' display={"flex"} value={frequencia} onChange={(event) => setFrequencia(event.target.options[event.target.selectedIndex].value)}>
                        <option value='sempre'>Estou sempre conectado</option>
                        <option value='uma-vez-ao-dia'>Uma vez ao dia</option>
                        <option value='algumas-vezes-na-semana'>Algumas vezes na semana ou de fim de semana</option>
                        <option value='quase-nunca'>Quase nunca uso redes sociais</option>
                    </Select>
                </Box>

                <Box className='box-pergunta'>
                    <Text>Quais redes sociais você usa?</Text>
                <VStack spacing={5} alignItems={"left"}>
                <Checkbox colorScheme='red' onChange={(event) => setRedes("facebook", event.target.checked)}>
                    Facebook
                </Checkbox>
                <Checkbox colorScheme='red' onChange={(event) => setRedes("instagram", event.target.checked)}>
                    Instagram
                </Checkbox>
                <Checkbox colorScheme='red' onChange={(event) => setRedes("tiktok", event.target.checked)}>
                    TikTok
                </Checkbox>
                <Checkbox colorScheme='red' onChange={(event) => setRedes("x", event.target.checked)}>
                    X(Twitter)
                </Checkbox>
                <Input size='xs' placeholder="outro?" className='input-perguntas' onChange={(event) => setRedes("outro", event.target.value, event.target)}/>
                </VStack>
                </Box>
          
                <Box className='box-pergunta'>
                    <Text>Qual a rede sociais você MAIS usa?</Text>
                <RadioGroup onChange={setRedesMais} value={redesMais}>
                <VStack spacing={5} alignItems={"left"}>
                    
                <Radio colorScheme='red' value='facebook'>
                    Facebook
                </Radio>
                <Radio colorScheme='red' value='instagram'>
                    Instagram
                </Radio>
                <Radio colorScheme='red' value='tiktok'>
                    TikTok
                </Radio>
                <Radio colorScheme='red' value='x'>
                    X(Twitter)
                </Radio>
                
                </VStack>
                </RadioGroup>
                </Box>
           
                <Box className='box-pergunta'>
                    <Text>Que tipo de conteúdo você mais consome nas redes sociais?</Text>
                    <RadioGroup onChange={setTipoConteudoConsome} value={tipoConteudoConsome}>
                    <VStack spacing={5} alignItems={"left"}>
                        
                    <Radio colorScheme='red' value='noticias'>
                        Notícias
                    </Radio>
                    <Radio colorScheme='red' value='entretenimento'>
                        Entretenimento
                    </Radio>
                    <Radio colorScheme='red' value='educativo'>
                        Educativo
                    </Radio>
                    <Radio colorScheme='red' value='religioso'>
                        Religioso
                    </Radio>
                    <Input size='xs' placeholder="outro?" className='input-perguntas' onChange={(event) => setTipoConteudoConsome(event.target.value)} />
                    </VStack>
                    </RadioGroup>
                </Box>
        
                <Box className='box-pergunta'>
                    <Text>Que tipo de conteúdo você mais compartilha nas redes sociais?</Text>
                    <Select size='xs' placeholder='Selecione' display={"flex"} onChange={(event) => setTipoConteudoCompartilha(event.target.options[event.target.selectedIndex].value)}>
                        <option value="noticias">Notícias</option>
                        <option value="humor">Humor</option>
                        <option value="motivacionais">Motivacionais</option>
                        <option value="visual_pessoal">Visual ou pessoal</option>
                        <option value="raramente_nunca">Raramente ou nunca compartilho</option>
                    </Select>
                </Box>
                
                <Box className='box-pergunta'>
                    <Text>As marcas, páginas ou influenciadores que você segue, em sua maioria, projetam que tipos de mensagens?</Text>
                        <Select size='xs' placeholder='Selecione' display={"flex"} onChange={(event) => setMarcas(event.target.options[event.target.selectedIndex].value)}>
                            <option value="autenticidade_transparencia">Autenticidade e Transparência</option>
                            <option value="informativas_educativas">Informativas e Educativas</option>
                            <option value="promocoes_descontos">Promoções e Descontos</option>
                            <option value="humoristicos_motivacionais">Humorísticos ou Motivacionais</option>
                        </Select>
                </Box>
      
                <Box className='box-pergunta'>
                    <Text>Como você decide quais conteúdos curtir, apoiar, compartilhar ou comentar nas redes sociais?</Text>
                    <Select size='xs' placeholder='Selecione' display={"flex"} onChange={(event) => setComoDecide(event.target.options[event.target.selectedIndex].value)}>
                        <option value="reflete_seus_interesses_opinioes">Se reflete seus interesses pessoais ou opiniões</option>
                        <option value="amigos_pessoas_admiro">Se é de amigos ou pessoas que eu admiro</option>
                        <option value="engracado_diverte">Se é engraçado ou me diverte</option>
                        <option value="controverso_promove_dialogos">Se é controverso ou promove diálogos</option>
                        <option value="nao_curto">Eu geralmente não curto nem comento postagens</option>
                    </Select>
                </Box>
           
                <Box className='box-pergunta'>
                    <Text>Há algum tipo de conteúdo que você evita ou ignora nas redes sociais?</Text>
                    <Select size='xs' placeholder='Selecione' display={"flex"} onChange={(event) => setTipoEvita(event.target.options[event.target.selectedIndex].value)}>
                        <option value="politico_polarizado">Conteúdo político ou polarizado</option>
                        <option value="publicidade_excessiva">Publicidade excessiva</option>
                        <option value="sensiveis_controversos">Temas sensíveis ou controversos</option>
                        <option value="repetitivas_sem_relevancia">Postagens repetitivas ou sem relevância</option>
                        <option value="vejo_todo_tipo">Eu vejo todo tipo de conteúdo</option>
                    </Select>
                </Box>
          
                <Box className='box-pergunta'>
                    <Text>O que voce mais gosta nas redes sociais?</Text>
                    <Select size='xs' placeholder='Selecione' display={"flex"} onChange={(event) => setMaisGosta(event.target.options[event.target.selectedIndex].value)}>
                        <option value="interagir_saber_novidades_familiares">Interagir e saber das novidades dos amigos e familiares</option>
                        <option value="atualizacoes_casuais">Acompanhar atualizações casuais e conteúdo de entretenimento geral, como vídeos, fotos e histórias</option>
                        <option value="debates_temas_reflexao">Descobrir e participar de debates sobre temas variados que provoquem reflexão ou inspirem mudanças sociais</option>
                        <option value="influenciadores_marcas">Seguir influenciadores e marcas que alinham com interesses pessoais, ficando por dentro das últimas notícias, desde lançamentos de produtos e promoções até atualidades sobre política, celebridades e moda, etc</option>
                    </Select>
                </Box>
            </VStack>
            <Box className='btn-continuar'>
                <Button onClick={(event) => {save(event.target)}}>continuar</Button>
                <Button id="aguarde" display={"none"}>Aguarde...</Button>
            </Box>
        </>
    );
}
export default PerguntasIniciaisII;