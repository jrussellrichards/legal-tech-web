import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Box minH="100vh" bg="gray.50" color="gray.800">
      <Header />
      <Box as="main">
        <Hero />
        <Features />
        <Services />
        <Pricing />
      </Box>
      <Footer />
      <WhatsAppButton />
    </Box>
  );
}

export default App;
