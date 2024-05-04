import React from 'react';
import {start, stop} from '../libs/VideoRecorderComponent';
import { API_URL } from '../constants';
import axios from 'axios';

import {
    Grid, GridItem,
    Box, Stack,
    Select,
    HStack, Center, Text, Checkbox, VStack, Input, Radio, RadioGroup

  } from '@chakra-ui/react';

function PerguntasIniciaisII(props) {
    const save = () => {
        return props.setActiveStep(3);
        if([frequencia, quaisRedes, redesMais, tipoConteudoConsome, tipoConteudoCompartilha, marcas, comoDecide, tipoEvita, maisGosta].some(el => el == "")) return alert("Preencha todos os campos");

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
            "mais_gosta": maisGosta
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
            props.setActiveStep(2)
          })
          .catch((error) => {
            console.log(error);
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
        <Text fontWeight={"bold"}>Uso de Redes Sociais</Text>
            <Grid
    templateAreas={`"p1 p2 p3"
                    "p4 p5 p6"
                    "p7 p8 p9"`}
    gridTemplateRows={'33% 33% 34%'}
    gridTemplateColumns={'33% 33% 34%'}
    h='500px'
    gap='1'
    color='blackAlpha.700'
    fontWeight='bold'
    >
    <GridItem pl='2' bg='#E5E5E5' area={'p1'}>
        <Center>
            <VStack>
                <Box>Com que frequência você utiliza redes sociais? </Box>
                <Box><Select placeholder='Selecione' w={300} display={"flex"} value={frequencia} onChange={(event) => setFrequencia(event.target.options[event.target.selectedIndex].value)}>
                <option value='sempre'>Estou sempre conectado</option>
                <option value='uma-vez-ao-dia'>Uma vez ao dia</option>
                <option value='algumas-vezes-na-semana'>Algumas vezes na semana ou de fim de semana</option>
                <option value='quase-nunca'>Quase nunca uso redes sociais</option></Select></Box>
            </VStack>
        </Center>
    </GridItem>
    <GridItem pl='2' bg='#E5E5E5' area={'p2'}>
    <Center>
            <VStack>
                <Box>Quais redes sociais você usa? </Box>
                <Box>
                <Stack spacing={5} direction='col'>
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
                <Input placeholder="outro?" borderColor={'black'} borderWidth={"1px"} onChange={(event) => setRedes("outro", event.target.value, event.target)}/>
                </Stack>
                </Box>
            </VStack>
        </Center>
    </GridItem>
    <GridItem pl='2' bg='#E5E5E5' area={'p3'}>
    <Center>
            <VStack>
                <Box>Quais redes sociais você MAIS usa? </Box>
                <Box>
                <RadioGroup onChange={setRedesMais} value={redesMais}>
                <Stack spacing={5} direction='col'>
                    
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
                
                </Stack>
                </RadioGroup>
                </Box>
            </VStack>
        </Center>
    </GridItem>
    <GridItem pl='2' bg='#E5E5E5' area={'p4'}>
    <Center>
            <VStack>
                <Box>Que tipo de conteúdo você mais consome nas redes sociais?</Box>
                <Box>
                    <RadioGroup onChange={setTipoConteudoConsome} value={tipoConteudoConsome}>
                    <Stack spacing={5} direction='col'>
                        
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
                    <Input placeholder="outro?" borderColor={'black'} borderWidth={"1px"} onChange={(event) => setTipoConteudoConsome(event.target.value)} />
                    </Stack>
                    </RadioGroup>
                </Box>
            </VStack>
        </Center>
    </GridItem>

    <GridItem pl='2' bg='#E5E5E5' area={'p5'}>
    <Center>
            <VStack>
                <Box>Que tipo de conteúdo você mais compartilha nas redes sociais?</Box>
                <Box>
                <Select placeholder='Selecione' w={300} display={"flex"} onChange={(event) => setTipoConteudoCompartilha(event.target.options[event.target.selectedIndex].value)}>
                    <option value="noticias">Notícias</option>
                    <option value="humor">Humor</option>
                    <option value="motivacionais">Motivacionais</option>
                    <option value="visual_pessoal">Visual ou pessoal</option>
                    <option value="raramente_nunca">Raramente ou nunca compartilho</option>
                </Select>
                </Box>
            </VStack>
        </Center>
    </GridItem>

    <GridItem pl='2' bg='#E5E5E5' area={'p6'}>
    <Center>
            <VStack>
                <Box>As marcas, páginas ou influenciadores que você segue, em sua maioria, projetam que tipos de mensagens? </Box>
                <Box><Select placeholder='Selecione' w={300} display={"flex"} onChange={(event) => setMarcas(event.target.options[event.target.selectedIndex].value)}>
                    <option value="autenticidade_transparencia">Autenticidade e Transparência</option>
                    <option value="informativas_educativas">Informativas e Educativas</option>
                    <option value="promocoes_descontos">Promoções e Descontos</option>
                    <option value="humoristicos_motivacionais">Humorísticos ou Motivacionais</option>
                </Select></Box>
            </VStack>
        </Center>
    </GridItem>

    <GridItem pl='2' bg='#E5E5E5' area={'p7'}>
    <Center>
            <VStack>
                <Box>Como você decide quais conteúdos curtir, apoiar, compartilhar ou comentar nas redes sociais?</Box>
                <Box><Select placeholder='Selecione' w={300} display={"flex"} onChange={(event) => setComoDecide(event.target.options[event.target.selectedIndex].value)}>
                    <option value="reflete_seus_interesses_opinioes">Se reflete seus interesses pessoais ou opiniões</option>
                    <option value="amigos_pessoas_admiro">Se é de amigos ou pessoas que eu admiro</option>
                    <option value="engracado_diverte">Se é engraçado ou me diverte</option>
                    <option value="controverso_promove_dialogos">Se é controverso ou promove diálogos</option>
                    <option value="nao_curto">Eu geralmente não curto nem comento postagens</option>
                </Select></Box>
            </VStack>
        </Center>
    </GridItem>

    <GridItem pl='2' bg='#E5E5E5' area={'p8'}>
    <Center>
            <VStack>
                <Box>Há algum tipo de conteúdo que você evita ou ignora nas redes sociais?</Box>
                <Box><Select placeholder='Selecione' w={300} display={"flex"} onChange={(event) => setTipoEvita(event.target.options[event.target.selectedIndex].value)}>
                    <option value="politico_polarizado">Conteúdo político ou polarizado</option>
                    <option value="publicidade_excessiva">Publicidade excessiva</option>
                    <option value="sensiveis_controversos">Temas sensíveis ou controversos</option>
                    <option value="repetitivas_sem_relevancia">Postagens repetitivas ou sem relevância</option>
                    <option value="vejo_todo_tipo">Eu vejo todo tipo de conteúdo</option>
                </Select></Box>
            </VStack>
        </Center>
    </GridItem>

    <GridItem pl='2' bg='#E5E5E5' area={'p9'}>
    <Center>
            <VStack>
                <Box>O que voce mais gosta nas redes sociais?</Box>
                <Box><Select placeholder='Selecione' w={300} display={"flex"} onChange={(event) => setMaisGosta(event.target.options[event.target.selectedIndex].value)}>
                    <option value="interagir_saber_novidades_familiares">Interagir e saber das novidades dos amigos e familiares</option>
                    <option value="atualizacoes_casuais">Acompanhar atualizações casuais e conteúdo de entretenimento geral, como vídeos, fotos e histórias</option>
                    <option value="debates_temas_reflexao">Descobrir e participar de debates sobre temas variados que provoquem reflexão ou inspirem mudanças sociais</option>
                    <option value="influenciadores_marcas">Seguir influenciadores e marcas que alinham com interesses pessoais, ficando por dentro das últimas notícias, desde lançamentos de produtos e promoções até atualidades sobre política, celebridades e moda, etc</option>
                </Select></Box>
            </VStack>
        </Center>
    </GridItem>
    </Grid>

        <button onClick={() => {save();/*stop({email:window.email,step:2});props.setActiveStep(3)*/}}>continuar</button>
        
        </>
    );
}
export default PerguntasIniciaisII;