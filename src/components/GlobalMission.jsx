import React from 'react';
import { Box, Container, Heading, Text, VStack, SimpleGrid, Image as ChakraImage, Icon, Flex } from '@chakra-ui/react';
import { FaRobot, FaUserTie } from 'react-icons/fa';

const GlobalMission = () => {
    return (
        <Box py={24} bg="white" position="relative" overflow="hidden" id="mission">
            <Container maxW="container.xl">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">

                    {/* Left Column: Text */}
                    <VStack spacing={8} align="start">
                        <Text
                            color="gold.500"
                            fontWeight="bold"
                            fontSize="xs"
                            textTransform="uppercase"
                        >
                            Nuestra Misión
                        </Text>

                        <Heading
                            fontSize={{ base: "3xl", md: "4xl" }}
                            fontWeight="900"
                            color="brand.950"
                            lineHeight="1.1"
                            letterSpacing="-0.02em"
                        >
                            No reemplazamos al abogado. <br />
                            <Text as="span" color="gold.500">Lo potenciamos.</Text>
                        </Heading>

                        <VStack spacing={6} fontSize="lg" color="gray.600" lineHeight="1.8">
                            <Text>
                                No somos una empresa de software intentando automatizarlo todo. Entendemos que en el derecho, <Text as="span" fontWeight="bold" color="brand.800">el criterio humano es irremplazable.</Text>
                            </Text>

                            <Box
                                w="full"
                                bg="gray.50"
                                p={6}
                                borderRadius="xl"
                                borderLeft="4px solid"
                                borderColor="gold.400"
                            >
                                <Text fontStyle="italic" color="gray.700">
                                    "Nuestra tecnología no sustituye al experto: le da superpoderes. Un abogado con IA detecta lo que otros pasan por alto y trabaja con una precisión diez veces superior."
                                </Text>
                            </Box>

                            <Text>
                                Combinamos la mejor ingeniería con el talento legal más agudo. Así obtenemos resultados que un estudio tradicional, por excelente que sea, <Text as="span" fontWeight="bold" color="brand.950">físicamente no puede igualar.</Text>
                            </Text>
                        </VStack>
                    </VStack>

                    {/* Right Column: Visual Representation */}
                    <Box position="relative">
                        <Box
                            position="absolute"
                            top="-20px"
                            right="-20px"
                            w="100%"
                            h="100%"
                            bg="brand.900"
                            borderRadius="3xl"
                            opacity="0.1"
                            transform="rotate(3deg)"
                            zIndex={0}
                        />

                        <ChakraImage
                            src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2664&auto=format&fit=crop"
                            alt="Abogados y clientes confianza"
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

export default GlobalMission;
