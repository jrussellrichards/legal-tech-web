import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WhyNow from '../components/WhyNow';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

function TitleStudy() {
    return (
        <Box minH="100vh" bg="gray.50" color="gray.800">
            <Header />
            <Box as="main">
                <Hero />
                <WhyNow />
                <AboutUs />
                <Features />
                <Services />
                <Pricing />
            </Box>
            <Footer />
            <WhatsAppButton />
        </Box>
    );
}

export default TitleStudy;
