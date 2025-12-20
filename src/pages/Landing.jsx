import React from 'react';
import { Box, Container, Heading, Text, Button, VStack, Flex, SimpleGrid, Icon, useDisclosure } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaGlobeAmericas, FaBalanceScale, FaHandshake } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi2';
import Mission from '../components/Mission';
import OurServices from '../components/OurServices';
import Methodology from '../components/Methodology';
import Results from '../components/Results';
import Team from '../components/Team';
import WhatsAppButton from '../components/WhatsAppButton';
import ContactModal from '../components/ContactModal';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Landing = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {/* Hero Section Wrapper with Background */}
            <Box
                position="relative"
                bg="brand.950"
                bgImage="url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop')"
                bgSize="cover"
                bgPosition="center"
                bgAttachment="fixed"
                color="white"
                overflow="hidden"
            >
                {/* Dark Overlay */}
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="brand.950"
                    opacity="0.9"
                    zIndex={0}
                />

                {/* Header inside Hero to overlay properly */}
                <Header />

                {/* Background Blobs */}
                <Box
                    position="absolute"
                    top="-20%"
                    right="-10%"
                    w="800px"
                    h="800px"
                    bgGradient="radial(circle, brand.700, transparent 70%)"
                    opacity="0.2"
                    filter="blur(120px)"
                    zIndex={0}
                />
                <Box
                    position="absolute"
                    bottom="-10%"
                    left="-10%"
                    w="600px"
                    h="600px"
                    bgGradient="radial(circle, gold.500, transparent 70%)"
                    opacity="0.1"
                    filter="blur(100px)"
                    zIndex={0}
                />

                {/* Main Content (Hero + Pillars) */}
                <Container maxW="container.xl" pt={32} pb={20} position="relative" zIndex={1}>

                    {/* Hero Text */}
                    <VStack spacing={12} textAlign="center" maxW="4xl" mx="auto" mb={32}>
                        <Box>
                            <Text color="gold.400" fontWeight="bold" letterSpacing="widest" textTransform="uppercase" mb={4} fontSize="sm">
                                Revolución Legal Latam
                            </Text>
                            <Heading as="h1" size="4xl" fontWeight="900" lineHeight="1.1" mb={6}>
                                El nuevo estándar en <Text as="span" bgGradient="linear(to-r, gold.200, gold.500)" bgClip="text">servicios legales globales.</Text>
                            </Heading>
                            <Text fontSize="2xl" color="gray.300" lineHeight="relaxed">
                                Parley combina inteligencia artificial y expertos de élite para proteger tus decisiones más importantes.
                                Precisión absoluta para personas y empresas.
                            </Text>
                        </Box>

                        <Flex gap={6} direction={{ base: 'column', sm: 'row' }}>
                            <Button
                                as="a"
                                href="#services"
                                size="lg"
                                h={16}
                                px={10}
                                fontSize="lg"
                                bg="gold.500"
                                color="brand.950"
                                rightIcon={<HiArrowRight />}
                                _hover={{ bg: 'gold.400', transform: 'translateY(-2px)' }}
                                borderRadius="full"
                                fontWeight="bold"
                            >
                                Nuestros Servicios
                            </Button>
                            <Button
                                onClick={onOpen}
                                variant="outline"
                                size="lg"
                                h={16}
                                px={10}
                                fontSize="lg"
                                color="white"
                                borderColor="whiteAlpha.400"
                                _hover={{ bg: 'whiteAlpha.100' }}
                                borderRadius="full"
                                fontWeight="medium"
                            >
                                Hablemos de tu caso
                            </Button>
                        </Flex>

                        {/* Contact Modal */}
                        <ContactModal isOpen={isOpen} onClose={onClose} />
                    </VStack>

                    {/* Pillars */}
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12} pt={10} borderTop="1px solid" borderColor="whiteAlpha.100">
                        <VStack align="start" spacing={4}>
                            <Icon as={FaGlobeAmericas} w={8} h={8} color="gold.400" />
                            <Heading size="md">Alcance Regional</Heading>
                            <Text color="gray.400">
                                Construyendo la red legal más grande y confiable de Latinoamérica, sin fronteras.
                            </Text>
                        </VStack>
                        <VStack align="start" spacing={4}>
                            <Icon as={FaBalanceScale} w={8} h={8} color="gold.400" />
                            <Heading size="md">Calidad Garantizada</Heading>
                            <Text color="gray.400">
                                Estándares internacionales y tecnología jurídica para blindar cada operación y contrato.
                            </Text>
                        </VStack>
                        <VStack align="start" spacing={4}>
                            <Icon as={FaHandshake} w={8} h={8} color="gold.400" />
                            <Heading size="md">Acceso Universal</Heading>
                            <Text color="gray.400">
                                Tecnología que reduce costos y barreras, haciendo que la excelencia legal sea accesible para todos.
                            </Text>
                        </VStack>
                    </SimpleGrid>

                </Container>
            </Box>

            {/* Mission Section (Purpose) */}
            <Mission />

            {/* Our Services Section */}
            <OurServices />

            {/* Methodology Section (How we do it) */}
            <Methodology />

            {/* Results Section (Proof) */}
            <Results />

            {/* Team Section (Full Width) */}
            <Team />

            {/* Footer */}
            <Footer />

            {/* WhatsApp Button */}
            <WhatsAppButton />
        </>
    );
};

export default Landing;
