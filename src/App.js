import React from 'react';

import {
  ChakraProvider,
  Box,
  Grid,
  theme,

  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react';
import { Logo } from './Logo';
import Explicacao from './pages/Explicacao'
import IdentificacaoAceite from './pages/IdentificacaoAceite';
import PerguntasIniciaisI from './pages/PerguntasIniciaisI.js';
import PerguntasIniciaisII from './pages/PerguntasIniciaisII.js';
import Video from './pages/Video';
import PerguntasFinais from './pages/PerguntasFinais';
import Agradecimento from './pages/Agradecimento';

const steps = [
  { title: 'Perguntas iniciais 1', description: '' },
  { title: 'Perguntas iniciais 2', description: '' },
  { title: 'Vídeo', description: '' },
  { title: 'Perguntas finais', description: '' },
  { title: 'Agradecimento', description: '' },
]

function App() {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  })

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
        <Stepper index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
          { activeStep == 1 && <PerguntasIniciaisI setActiveStep={setActiveStep} /> }
          { activeStep == 2 && <PerguntasIniciaisII setActiveStep={setActiveStep} /> }
          { activeStep == 3 && <Video setActiveStep={setActiveStep} /> }
          { activeStep == 4 && <PerguntasFinais setActiveStep={setActiveStep} />}
          { activeStep == 5 && <Agradecimento setActiveStep={setActiveStep} /> }
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
