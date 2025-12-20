import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Icon, Divider } from '@chakra-ui/react';
import { FaChartLine, FaClock, FaCheckDouble } from 'react-icons/fa';

const Results = () => {
    return (
        <Box py={24} bg="brand.950" color="white" id="results">
            <Container maxW="container.xl">
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={20} alignItems="center">

                    {/* Left: Narrative */}
                    <VStack align="start" spacing={8}>
                        <Box>
                            <Text color="gold.500" fontWeight="bold" fontSize="sm" letterSpacing="widest" textTransform="uppercase" mb={2}>
                                Tecnología + Experiencia
                            </Text>
                            <Heading size="2xl" lineHeight="1.1" fontWeight="900">
                                Precisión que ningún humano <br />
                                <Text as="span" color="gold.400">puede igualar solo.</Text>
                            </Heading>
                        </Box>

                        <Text fontSize="xl" color="gray.300" lineHeight="relaxed">
                            Nuestra IA analiza cada documento con una precisión del <Text as="span" color="white" fontWeight="bold">99.8%</Text>, eliminando el margen de error humano. Pero la tecnología sola no basta.
                        </Text>

                        <Text fontSize="xl" color="gray.300" lineHeight="relaxed">
                            Por eso, cada análisis es validado por abogados senior que aportan el criterio que solo la experiencia da. <Text as="span" color="gold.400" fontWeight="bold">Lo mejor de ambos mundos.</Text>
                        </Text>
                    </VStack>

                    {/* Right: Stats Cards */}
                    <VStack spacing={6} w="full">
                        {/* Stat 1 */}
                        <HStack bg="whiteAlpha.100" p={6} borderRadius="xl" w="full" spacing={6} border="1px solid" borderColor="whiteAlpha.200">
                            <Box bg="gold.500" p={3} borderRadius="lg" color="brand.950">
                                <Icon as={FaChartLine} w={6} h={6} />
                            </Box>
                            <Box>
                                <Text fontSize="3xl" fontWeight="900" lineHeight="1">99.8%</Text>
                                <Text color="gray.400" fontSize="sm">Precisión en detección de riesgos (vs 85% promedio humano)</Text>
                            </Box>
                        </HStack>

                        {/* Stat 2 */}
                        <HStack bg="whiteAlpha.100" p={6} borderRadius="xl" w="full" spacing={6} border="1px solid" borderColor="whiteAlpha.200">
                            <Box bg="brand.600" p={3} borderRadius="lg" color="white">
                                <Icon as={FaClock} w={6} h={6} />
                            </Box>
                            <Box>
                                <Text fontSize="3xl" fontWeight="900" lineHeight="1">10x</Text>
                                <Text color="gray.400" fontSize="sm">Más rápido. Resultados en minutos, no semanas.</Text>
                            </Box>
                        </HStack>

                        {/* Stat 3 */}
                        <HStack bg="whiteAlpha.100" p={6} borderRadius="xl" w="full" spacing={6} border="1px solid" borderColor="whiteAlpha.200">
                            <Box bg="green.500" p={3} borderRadius="lg" color="white">
                                <Icon as={FaCheckDouble} w={6} h={6} />
                            </Box>
                            <Box>
                                <Text fontSize="3xl" fontWeight="900" lineHeight="1">Doble</Text>
                                <Text color="gray.400" fontSize="sm">Validación: Algoritmo imparcial + Criterio experto.</Text>
                            </Box>
                        </HStack>
                    </VStack>

                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Results;
