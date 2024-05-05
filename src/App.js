import React from 'react';

import {
  ChakraProvider,
  Box,
  Container,
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
  { title: 'Demográficas', description: '' },
  { title: 'Redes Sociais', description: '' },
  { title: 'Vídeo', description: '' },
  { title: 'Questões finais', description: '' },
  { title: 'Obrigado', description: '' },
]

function App() {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  })

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="1em">
        <Container minW='100%'>
        <Stepper index={activeStep} size='sm' orientation='vertical'>
      {steps.map((step, index) => (
        <Step key={index} className="steps">
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
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
