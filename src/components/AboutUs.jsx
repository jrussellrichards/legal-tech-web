import React from 'react';
import { Box, Container, Heading, Text, VStack, SimpleGrid, Image as ChakraImage } from '@chakra-ui/react';

const AboutUs = () => {
    return (
        <Box py={24} bg="white" position="relative" overflow="hidden">
            <Container maxW="container.xl">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">

                    {/* Left Column: Storytelling */}
                    <VStack spacing={8} align="start">
                        <Text
                            color="gold.500"
                            fontWeight="bold"
                            fontSize="xs"
                            letterSpacing="widest"
                            textTransform="uppercase"
                        >
                            Nuestra Motivación
                        </Text>

                        <Heading
                            fontSize={{ base: "3xl", md: "4xl" }}
                            fontWeight="900"
                            color="brand.950"
                            lineHeight="1.1"
                            letterSpacing="-0.02em"
                        >
                            "No aceptamos que comprar una casa siga siendo una pesadilla."
                        </Heading>

                        <VStack spacing={6} fontSize="lg" color="gray.600" lineHeight="1.8">
                            <Text>
                                Nos dimos cuenta de que en Chile, el estudio de títulos seguía anclado en el pasado:
                                rumas de papel, semanas de espera y <Text as="span" color="red.500" fontWeight="bold">errores humanos que costaban caro.</Text>
                            </Text>

                            <Box
                                w="full"
                                bg="brand.50"
                                p={6}
                                borderRadius="xl"
                                borderLeft="4px solid"
                                borderColor="brand.950"
                            >
                                <Text fontWeight="bold" color="brand.950" fontSize="lg" mb={2}>
                                    Así que cambiamos las reglas.
                                </Text>
                                <Text fontSize="md" color="brand.800">
                                    Creamos un algoritmo capaz de procesar décadas de historia registral al instante,
                                    permitiendo a nuestros abogados enfocarse en la estrategia y seguridad de tu inversión.
                                </Text>
                            </Box>

                            <Text fontWeight="medium" color="brand.950">
                                Hoy transformamos un trámite lento e incierto en un proceso <Text as="span" bg="gold.100" px={1}>ágil y transparente.</Text>
                            </Text>
                        </VStack>
                    </VStack>

                    {/* Right Column: Image */}
                    <Box position="relative">
                        {/* Visual Decoration */}
                        <Box
                            position="absolute"
                            top="-20px"
                            right="-20px"
                            w="100%"
                            h="100%"
                            bg="gold.400"
                            borderRadius="3xl"
                            opacity="0.2"
                            transform="rotate(6deg)"
                            zIndex={0}
                        />

                        <ChakraImage
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                            alt="Reunión equipo legal moderno analizando datos"
                            borderRadius="3xl"
                            boxShadow="2xl"
                            position="relative"
                            zIndex={1}
                            w="100%"
                            h="auto"
                            objectFit="cover"
                            filter="grayscale(20%) contrast(1.1)"
                        />
                    </Box>

                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default AboutUs;
