import React from 'react';
import {start, stop} from '../libs/VideoRecorderComponent';
import { API_URL } from '../constants';
import axios from 'axios';

import {
    Grid, GridItem,
    Box,
    Select, Input,
    HStack, Center, Text

  } from '@chakra-ui/react';

function PerguntasIniciaisI(props) {
    const save = () => {
        window.email = email;
        
        //if([email, anonascto, genero, rendaFamiliar, escolaridade, naturalidade].some(el => el == "")) return alert("Preencha todos os campos");
        return props.setActiveStep(2);
        let data = JSON.stringify({
            "id": 1,
            "email": email,
            "idade": anonascto,
            "genero": genero,
            "escolaridade": escolaridade,
            "renda_familiar": rendaFamiliar,
            "naturalidade": naturalidade
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: API_URL + "/perguntas1",
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

        stop({
                email:email,
                step:1
            });

        start();
    }
    const [email, setEmail] = React.useState("");
    const [anonascto, setAnoNascto] = React.useState("");
    const [genero, setGenero] = React.useState("");
    const [rendaFamiliar, setRendaFamiliar] = React.useState("");
    const [escolaridade, setEscolaridade] = React.useState("");
    const [naturalidade, setNaturalidade] = React.useState("")
    return (
        <>
        <Text fontWeight={"bold"}>Perguntas Demográficas Básicas</Text>
            <Grid
    templateAreas={`"p1 p2"
                    "p3 p4"
                    "p5 p6"`}
    gridTemplateRows={'33% 33% 33%'}
    gridTemplateColumns={'50% 50%'}
    h='200px'
    gap='1'
    color='blackAlpha.700'
    fontWeight='bold'
    >
    <GridItem pl='2' bg='#E5E5E5' area={'p1'}>
        <Center paddingTop={"10px"}>
            <HStack verticalAlign={"center"}>
                <Box>Email:</Box>
                <Box><input type="email" display={"flex"} w={300} value={email} onChange={(event) => setEmail(event.target.value)}/></Box>
            </HStack>
        </Center>
    </GridItem>
    <GridItem pl='2' bg='#E5E5E5' area={'p2'}>
    <Center>
            <HStack>
                <Box>Ano de nascimento: </Box>
                <Box><Select placeholder='Selecione' w={300} display={"flex"} value={anonascto} onChange={(event) => setAnoNascto(event.target.options[event.target.selectedIndex].value)}>
                    <option value='1900'>1900</option>
                    <option value='1901'>1901</option>
                    <option value='1902'>1902</option>
                    <option value='1903'>1903</option>
                    <option value='1904'>1904</option>
                    <option value='1905'>1905</option>
                    <option value='1906'>1906</option>
                    <option value='1907'>1907</option>
                    <option value='1908'>1908</option>
                    <option value='1909'>1909</option>
                    <option value='1910'>1910</option>
                    <option value='1911'>1911</option>
                    <option value='1912'>1912</option>
                    <option value='1913'>1913</option>
                    <option value='1914'>1914</option>
                    <option value='1915'>1915</option>
                    <option value='1916'>1916</option>
                    <option value='1917'>1917</option>
                    <option value='1918'>1918</option>
                    <option value='1919'>1919</option>
                    <option value='1920'>1920</option>
                    <option value='1921'>1921</option>
                    <option value='1922'>1922</option>
                    <option value='1923'>1923</option>
                    <option value='1924'>1924</option>
                    <option value='1925'>1925</option>
                    <option value='1926'>1926</option>
                    <option value='1927'>1927</option>
                    <option value='1928'>1928</option>
                    <option value='1929'>1929</option>
                    <option value='1930'>1930</option>
                    <option value='1931'>1931</option>
                    <option value='1932'>1932</option>
                    <option value='1933'>1933</option>
                    <option value='1934'>1934</option>
                    <option value='1935'>1935</option>
                    <option value='1936'>1936</option>
                    <option value='1937'>1937</option>
                    <option value='1938'>1938</option>
                    <option value='1939'>1939</option>
                    <option value='1940'>1940</option>
                    <option value='1941'>1941</option>
                    <option value='1942'>1942</option>
                    <option value='1943'>1943</option>
                    <option value='1944'>1944</option>
                    <option value='1945'>1945</option>
                    <option value='1946'>1946</option>
                    <option value='1947'>1947</option>
                    <option value='1948'>1948</option>
                    <option value='1949'>1949</option>
                    <option value='1950'>1950</option>
                    <option value='1951'>1951</option>
                    <option value='1952'>1952</option>
                    <option value='1953'>1953</option>
                    <option value='1954'>1954</option>
                    <option value='1955'>1955</option>
                    <option value='1956'>1956</option>
                    <option value='1957'>1957</option>
                    <option value='1958'>1958</option>
                    <option value='1959'>1959</option>
                    <option value='1960'>1960</option>
                    <option value='1961'>1961</option>
                    <option value='1962'>1962</option>
                    <option value='1963'>1963</option>
                    <option value='1964'>1964</option>
                    <option value='1965'>1965</option>
                    <option value='1966'>1966</option>
                    <option value='1967'>1967</option>
                    <option value='1968'>1968</option>
                    <option value='1969'>1969</option>
                    <option value='1970'>1970</option>
                    <option value='1971'>1971</option>
                    <option value='1972'>1972</option>
                    <option value='1973'>1973</option>
                    <option value='1974'>1974</option>
                    <option value='1975'>1975</option>
                    <option value='1976'>1976</option>
                    <option value='1977'>1977</option>
                    <option value='1978'>1978</option>
                    <option value='1979'>1979</option>
                    <option value='1980'>1980</option>
                    <option value='1981'>1981</option>
                    <option value='1982'>1982</option>
                    <option value='1983'>1983</option>
                    <option value='1984'>1984</option>
                    <option value='1985'>1985</option>
                    <option value='1986'>1986</option>
                    <option value='1987'>1987</option>
                    <option value='1988'>1988</option>
                    <option value='1989'>1989</option>
                    <option value='1990'>1990</option>
                    <option value='1991'>1991</option>
                    <option value='1992'>1992</option>
                    <option value='1993'>1993</option>
                    <option value='1994'>1994</option>
                    <option value='1995'>1995</option>
                    <option value='1996'>1996</option>
                    <option value='1997'>1997</option>
                    <option value='1998'>1998</option>
                    <option value='1999'>1999</option>
                    <option value='2000'>2000</option>
                </Select></Box>
            </HStack>
        </Center>
    </GridItem>
    <GridItem pl='2' bg='#E5E5E5' area={'p3'}>
        <Center>
            <HStack>
                <Box>Gênero: </Box>
                <Box><Select placeholder='Selecione' w={300} display={"flex"} value={genero} onChange={(event) => setGenero(event.target.options[event.target.selectedIndex].value)}>
                <option value='masculino'>Masculino</option>
                <option value='feminino'>Feminino</option>
                <option value='naodizer'>Prefiro não dizer</option>
                <option value='lgbt'>LGBTQQICAAPF2K+</option></Select></Box>
            </HStack>
        </Center>
    </GridItem>
    <GridItem pl='2' bg='#E5E5E5' area={'p4'}>
    <Center>
            <HStack>
                <Box>Escolaridade: </Box>
                <Box><Select placeholder='Selecione' w={300} display={"flex"} onChange={(event) => setEscolaridade(event.target.options[event.target.selectedIndex].value)}>
                <option value='fundamental'>Ensino Fundamental</option>
                <option value='medio'>Ensino Médio</option>
                <option value='superior-incompleto'>Superior Incompleto</option>
                <option value='superior-completo'>Superior Completo</option>
                <option value='pos'>Pós graduação</option></Select></Box>
            </HStack>
        </Center>
    </GridItem>

    <GridItem pl='2' bg='#E5E5E5' area={'p5'}>
    <Center>
            <HStack>
                <Box>Renda Familiar:</Box>
                <Box><Select placeholder='Selecione' w={300} display={"flex"} onChange={(event) => setRendaFamiliar(event.target.options[event.target.selectedIndex].value)}>
                <option value='1salario' >1 salário mínimo</option>
                <option value='2salarios'>2 salários mínimos</option>
                <option value='3salarios'>3 salários mínimos</option>
                <option value='4salarios'>4 salários mínimos</option>
                <option value='mais5salarios'>mais de 5 salários mínimos</option></Select></Box>
            </HStack>
        </Center>
    </GridItem>

    <GridItem pl='2' bg='#E5E5E5' area={'p6'}>
    <Center>
            <HStack>
                <Box>Naturalidade: </Box>
                <Box><Select placeholder='Selecione' w={300} display={"flex"} onChange={(event) => setNaturalidade(event.target.options[event.target.selectedIndex].value)}>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondonia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                    <option value="DF">Distrito Federal</option>
                    
                </Select></Box>
            </HStack>
        </Center>
    </GridItem>
    </Grid>
    <button onClick={() => start()}>gravar</button>
    <button onClick={() => save()}>continuar</button>
        </>
    );
}
export default PerguntasIniciaisI;