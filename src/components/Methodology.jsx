import React from 'react';
import { Box, Container, Heading, Text, VStack, SimpleGrid, Image as ChakraImage, Icon } from '@chakra-ui/react';
import { FaUserTie, FaRobot } from 'react-icons/fa';

const Methodology = () => {
    return (
        <Box py={32} bg="gray.50" position="relative" overflow="hidden" id="methodology">
            <Container maxW="container.xl">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} alignItems="center">

                    {/* Image Column */}
                    <Box position="relative" order={{ base: 2, md: 1 }}>
                        <Box
                            position="absolute"
                            top="-20px"
                            left="-20px"
                            w="100%"
                            h="100%"
                            bg="brand.900"
                            borderRadius="3xl"
                            opacity="0.1"
                            transform="rotate(-3deg)"
                            zIndex={0}
                        />

                        <ChakraImage
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
                            alt="Equipo legal asesorando a cliente satisfecho"
                            borderRadius="3xl"
                            boxShadow="2xl"
                            position="relative"
                            zIndex={1}
                            w="100%"
                            h="500px"
                            objectFit="cover"
                            objectPosition="top"
                        />
                    </Box>

                    {/* Text Column */}
                    <VStack spacing={10} align="start" order={{ base: 1, md: 2 }}>
                        <Box>
                            <Text
                                color="gold.500"
                                fontWeight="bold"
                                fontSize="sm"
                                letterSpacing="widest"
                                textTransform="uppercase"
                                mb={4}
                            >
                                Nuestra Metodología
                            </Text>

                            <Heading
                                fontSize={{ base: "3xl", md: "5xl" }}
                                fontWeight="900"
                                color="brand.950"
                                lineHeight="1.1"
                                letterSpacing="-0.02em"
                            >
                                No reemplazamos al abogado. <br />
                                <Text as="span" color="gold.500">Lo potenciamos x10.</Text>
                            </Heading>
                        </Box>

                        <VStack spacing={6} fontSize="xl" color="gray.600" lineHeight="1.8">
                            <Text>
                                No somos una empresa de software intentando automatizarlo todo. Entendemos que en el derecho, <Text as="span" fontWeight="bold" color="brand.800">el criterio humano es irremplazable.</Text>
                            </Text>

                            <Box
                                w="full"
                                bg="white"
                                p={8}
                                borderRadius="2xl"
                                borderLeft="6px solid"
                                borderColor="brand.950"
                                boxShadow="sm"
                            >
                                <Text fontStyle="italic" color="brand.900" fontWeight="medium">
                                    "Nuestra tecnología no sustituye al experto: le da superpoderes. Un abogado con IA detecta lo que otros pasan por alto y trabaja con una precisión diez veces superior."
                                </Text>
                            </Box>

                            <Text>
                                Combinamos la mejor ingeniería con el talento legal más agudo. Así obtenemos resultados que un estudio tradicional, por excelente que sea, <Text as="span" fontWeight="bold" color="brand.950">físicamente no puede igualar.</Text>
                            </Text>
                        </VStack>
                    </VStack>

                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Methodology;
