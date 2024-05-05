import React from 'react';
import {stop} from '../libs/VideoRecorderComponent';
import { API_URL } from '../constants';
import axios from 'axios';

import {
    Box, VStack,
    Select,
    Text, Textarea, Button

  } from '@chakra-ui/react';

function PerguntasFinais(props) {
    const save = (target) => {
        target.style.display='none';
        document.getElementById("aguarde").style.display='block';

        if([perg1, perg2, perg3, perg4, perg5, perg6, perg7, perg8, perg9, perg10].some(el => el === "")) {
            target.style.display='block'
            document.getElementById("aguarde").style.display='none';
            return alert("Preencha todos os campos");
        }
        let data = JSON.stringify({
            "id": 1,
            "perg1": perg1,
            "perg2": perg2,
            "perg3": perg3,
            "perg4": perg4,
            "perg5": perg5,
            "perg6": perg6,
            "perg7": perg7,
            "perg8": perg8,
            "perg9": perg9,
            "perg10": perg10,
            "email": window.email
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: API_URL + "/perguntasfinais",
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios.request(config)
          .then((response) => {
            props.setActiveStep(5)
            stop({email:window.email,step:4});
          })
          .catch((error) => {
            alert("Erro! Revise os dados e tente novamente!")
            target.style.display='block'
            document.getElementById("aguarde").style.display='none';
          });
    }

    const [perg1, setPerg1] = React.useState("");
    const [perg2, setPerg2] = React.useState("");
    const [perg3, setPerg3] = React.useState("");
    const [perg4, setPerg4] = React.useState("");
    const [perg5, setPerg5] = React.useState("");
    const [perg6, setPerg6] = React.useState("");
    const [perg7, setPerg7] = React.useState("");
    const [perg8, setPerg8] = React.useState("");
    const [perg9, setPerg9] = React.useState("");
    const [perg10, setPerg10] = React.useState("");
    
    return (
        <>
            <VStack alignItems={"left"} textAlign="left">
                <Box className='box-pergunta'>
                    <Text>Quando pensa sobre postagens que você gostou, que tipos de temas geralmente têm?</Text>
                    <Select size='xs' placeholder='Selecione' display={"flex"} value={perg1} onChange={(event) => setPerg1(event.target.options[event.target.selectedIndex].value)}>
                        <option value='sociais_politicos'>Temas sociais ou políticos</option>
                        <option value='saude_bem_estar'>Saúde e bem-estar</option>
                        <option value='compras_promocoes'>Compras e promoções</option>
                        <option value='arte_cultura'>Arte e cultura</option>
                        <option value='humor_entretenimento'>Humor e entretenimento</option>
                    </Select>
                </Box>

                <Box className='box-pergunta'>
                    <Text>O que te motiva a 'seguir' uma página ou influenciador nas redes sociais?</Text>
                    <Select size='xs' placeholder='Selecione' display={"flex"} value={perg2} onChange={(event) => setPerg2(event.target.options[event.target.selectedIndex].value)}>
                        <option value='sempre_novidades'>Quando sempre apresentam novidades sobre  produtos e promoções.</option>
                        <option value='mensagens_motivacionais'>Quando apresentam mensagens motivacionais ou inspiradoras</option>
                        <option value='fazem_rir'>Quando me fazem rir, conteúdo bem humorados</option>
                        <option value='conteudo_educativo'>Quando apresentam conteudo educativo, de ensino</option>
                        <option value='praticas_uteis'>Dicas práticas e úteis que posso aplicar no meu dia a dia</option>
                    </Select>
                </Box>
                <Box className='box-pergunta'>
                    <Text>O que geralmente desperta seu interesse em comprar algo online?</Text>
                    <Select size='xs' placeholder='Selecione' display={"flex"} value={perg3} onChange={(event) => setPerg3(event.target.options[event.target.selectedIndex].value)}>
                        <option value='amigos_influenciadores'>Quando amigos ou influenciadores que sigo mostram ou recomendam o produto</option>
                        <option value='enfrento_problema'>Quando enfrento um problema e me lembro de uma solução que vi em um anúncio online</option>
                        <option value='anuncio_chama_atencao'>Quando um anúncio chama minha atenção por ser visualmente atraente ou criativo</option>
                        <option value='encontro_oferta_especial'>Quando encontro uma oferta ou desconto especial enquanto navego online</option>
                        <option value='deparo_novo_produto'>Quando me deparo com um novo produto que desperta minha curiosidade nas redes sociais</option>
                    </Select>
                </Box>
                <Box className='box-pergunta'>
                    <Text>Com que frequencia voce compra online?</Text>
                    <Select size='xs' placeholder='Selecione' display={"flex"} value={perg4} onChange={(event) => setPerg4(event.target.options[event.target.selectedIndex].value)}>
                        <option value='1_2_mes'>1 a 2 vezes por mês</option>
                        <option value='mais_5_mes'>Mais que 5 vezes por mês</option>
                        <option value='preferencialmente_online'>Compro preferencialmente tudo sempre online</option>
                        <option value='pouco_online'>Compro pouco online, prefiro lojas físicas</option>
                        <option value='nao_online'>Não compro online, prefiro lojas físicas</option>
                    </Select>
                </Box>

                <Box className='box-pergunta'>
                    <Text>Normalmente, o que mais compra online?</Text>
                    <Select size='xs' placeholder='Selecione'display={"flex"} value={perg5} onChange={(event) => setPerg5(event.target.options[event.target.selectedIndex].value)}>
                        <option value='eletronicos_gadgets'>Eletrônicos e gadgets</option>
                        <option value='moda_acessorios'>Moda e acessórios</option>
                        <option value='beleza_cuidados_pessoais'>Produtos de beleza e cuidados pessoais</option>
                        <option value='educativo_cursos'>Livros, material educativo e cursos</option>
                        <option value='nao_costumo'>Não constumo comprar online</option>
                    </Select>
                </Box>

                <Box className='box-pergunta'>
                    <Text>Alguma vez, um influencer ou campanha publicitária ja te fez repensar e alterar sua percepção sobre um tema ou produto?</Text>
                    <Select size='xs' placeholder='Selecione'display={"flex"} value={perg6} onChange={(event) => setPerg6(event.target.options[event.target.selectedIndex].value)}>
                        <option value='assunto_produto_forma_positiva'>Sim, me fez ver o assunto ou produto de forma mais positiva</option>
                        <option value='visao_negativa'>Sim, me fez ter uma visão negativa do assunto ou produto</option>
                        <option value='percepcao_importancia'>Alterou minha percepção sobre a importância do assunto ou produto</option>
                        <option value='nao_alterou'>Não alterou minha percepção, mas foi memorável</option>
                        <option value='nao_lembro'>Não me lembro de nenhuma situação específica</option>
                    </Select>
                </Box>

                <Box className='box-pergunta'>
                    <Text>Qual estilo de apresentação você prefere quando influenciadores falam sobre produtos ou serviços nas redes sociais?</Text>
                    <Select size='xs' placeholder='Selecione'display={"flex"} value={perg7} onChange={(event) => setPerg7(event.target.options[event.target.selectedIndex].value)}>
                        <option value='relatos_pessoais'>Prefiro relatos pessoais e experiências com o produto, pois me envolvem mais</option>
                        <option value='informacoes_objectivas'>Prefiro informações objetivas e fatos sobre o produto, pois valorizo a praticidade e a clareza</option>
                        <option value='mistura_ambos'>Aprecio uma mistura de ambos: experiências pessoais enriquecidas com fatos concretos</option>
                        <option value='indiferente'>Sou indiferente ao estilo, contanto que a informação seja apresentada de forma concisa</option>
                        <option value='nao_me_interesso'>Geralmente não me interesso por conteúdo publicitário em posts de influenciadores</option>
                    </Select>
                </Box>

                <Box className='box-pergunta'>
                    <Text>Você já comprou algo por influência de uma postagem online e depois sentiu que o produto não atendeu às suas expectativas?</Text>
                    <Select size='xs' placeholder='Selecione'display={"flex"} value={perg8} onChange={(event) => setPerg8(event.target.options[event.target.selectedIndex].value)}>
                        <option value='varias_vezes'>Sim, aconteceu várias vezes e geralmente fico decepcionado</option>
                        <option value='uma_vez'>Aconteceu uma vez e foi suficiente para me deixar mais cauteloso</option>
                        <option value='raramente'>Raramente acontece</option>
                        <option value='geralmente_atendem'>Não, geralmente atendem ou superam minhas expectativas</option>
                        <option value='nao_lembro'>Não me lembro</option>
                    </Select>
                </Box>

                <Box className='box-pergunta'>
                    <Text>Você já se surpreendeu com a quantidade de compras online ao verificar seu extrato no final do mês?</Text>
                    <Select size='xs' placeholder='Selecione'display={"flex"} value={perg9} onChange={(event) => setPerg9(event.target.options[event.target.selectedIndex].value)}>
                        <option value='muitas_vezes'>Sim, já me surpreendi muitas vezes</option>
                        <option value='aconteceu_uma_vez'>Aconteceu uma vez ou outra</option>
                        <option value='raramente_acontece'>Raramente acontece, mas já ocorreu</option>
                        <option value='nunca_aconteceu'>Nunca aconteceu. Sempre monitoro minhas despesas de perto.</option>
                        <option value='nunca_comprei'>Nunca comprei online</option>
                    </Select>
                </Box>

                <Box className='box-pergunta'>
                    <Text>Pode compartilhar algo sobre alguma  experiência  marcante que você teve online? Não precisa se identificar, e o relato pode ser engraçado, pode ser triste, pode ser sobre voce ou sobre um amigo.</Text>
                    <Textarea value={perg10} onChange={(event) => setPerg10(event.target.value)}/>
                </Box>
            </VStack>
        
        <Box className='btn-continuar'>
            <Button onClick={(event) => {save(event.target)}}>continuar</Button>
            <Button id="aguarde" display={"none"}>Aguarde...</Button>
        </Box>
        </>
    );
}
export default PerguntasFinais;