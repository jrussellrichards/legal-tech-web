import React from 'react';
import { Box, Container, Heading, Text, VStack, Flex, Icon } from '@chakra-ui/react';
import { FaQuoteLeft } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <Box py={32} bg="brand.950" color="white" position="relative" overflow="hidden">
            {/* Abstract Background Element */}
            <Box
                position="absolute"
                top="-20%"
                right="-10%"
                w="600px"
                h="600px"
                bg="gold.500"
                filter="blur(180px)"
                opacity="0.05"
                borderRadius="full"
            />

            <Container maxW="container.lg">
                <Flex direction={{ base: 'column', md: 'row' }} gap={16} align="center">

                    {/* Visual Side */}
                    <Box flex="1" position="relative">
                        <Icon as={FaQuoteLeft} w={20} h={20} color="gold.500" opacity="0.2" position="absolute" top={-10} left={-10} />
                        <Heading
                            size="3xl"
                            fontWeight="900"
                            lineHeight="shorter"
                            letterSpacing="-0.03em"
                            bgGradient="linear(to-br, white, gray.400)"
                            bgClip="text"
                        >
                            No aceptamos que comprar una casa fuera una pesadilla.
                        </Heading>
                    </Box>

                    {/* Narrative Side */}
                    <VStack flex="1.2" align="start" spacing={8}>
                        <Text fontSize="xl" lineHeight="relaxed" color="gray.300">
                            Nos dimos cuenta de que en Chile, el estudio de títulos seguía anclado en el pasado: rumas de papel, semanas de espera y errores humanos que costaban millones.
                        </Text>

                        <Text fontSize="xl" lineHeight="relaxed" color="gray.300">
                            Vimos familias perdiendo oportunidades y pagando sobreprecios injustificables solo por la burocracia.
                        </Text>

                        <Box
                            borderLeft="4px solid"
                            borderColor="gold.500"
                            pl={6}
                            py={2}
                        >
                            <Text fontSize="2xl" fontWeight="bold" color="white" mb={4}>
                                Así que lo cambiamos.
                            </Text>
                            <Text fontSize="lg" color="gray.400">
                                Tras meses de desarrollo, logramos fusionar la lógica legal más estricta con un algoritmo capaz de procesar décadas de historia registral en segundos.
                            </Text>
                        </Box>

                        <Text fontSize="lg" fontWeight="medium" color="gold.400">
                            Transformamos un trámite de 3 semanas en una certeza de 72 horas.
                        </Text>
                    </VStack>
                </Flex>
            </Container>
        </Box>
    );
};

export default AboutUs;
