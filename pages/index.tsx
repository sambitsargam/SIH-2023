import type { NextPage } from 'next';
import { Container } from '@chakra-ui/react';
import GettingStarted from '../components/GettingStarted/GettingStarted';
import About from '../components/About/About';

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl">
      <About />
      <GettingStarted />
    </Container>
  );
};

export default Home;
