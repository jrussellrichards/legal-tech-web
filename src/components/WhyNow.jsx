import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';
import { FaExclamationTriangle, FaRobot, FaClock } from 'react-icons/fa';
import { HiCheckBadge } from 'react-icons/hi2';

const WhyNow = () => {
    return (
        <Box py={24} bg="white" position="relative">
            {/* Subtle gradient accent */}
            <Box position="absolute" top="0" left="0" w="full" h="2px" bgGradient="linear(to-r, transparent, gold.400, transparent)" />

            <Container maxW="container.xl">
                <VStack spacing={20}>
                    {/* Header */}
                    <Box textAlign="center" maxW="3xl" mx="auto">
                        <Text color="brand.600" fontWeight="900" mb={3} letterSpacing="wider" textTransform="uppercase" fontSize="xs">
                            La Realidad del Mercado
                        </Text>
                        <Heading as="h2" size="2xl" color="brand.950" mb={6} letterSpacing="-0.02em" fontWeight="900">
                            El Error Humano Cuesta Millones
                        </Heading>
                        <Text fontSize="lg" color="gray.600" lineHeight="tall">
                            Estamos en 2025. La tecnología existe para eliminar riesgos evitables. <br />
                            <Text as="span" fontWeight="bold" color="brand.900">No dejes que una letra chica arruine tu inversión.</Text>
                        </Text>
                    </Box>

                    {/* Stats Grid - UNIFIED DATA */}
                    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8} w="full">
                        <VStack
                            bg="red.50"
                            p={8}
                            borderRadius="2xl"
                            border="2px solid"
                            borderColor="red.200"
                            spacing={4}
                        >
                            <Icon as={FaExclamationTriangle} w={10} h={10} color="red.500" />
                            <Stat textAlign="center">
                                <StatNumber fontSize="5xl" fontWeight="900" color="red.600">22%</StatNumber>
                                <StatLabel fontSize="sm" fontWeight="700" color="gray.700">Tasa de Rechazo</StatLabel>
                                <StatHelpText fontSize="xs" color="gray.500">En inscripciones CBR manuales</StatHelpText>
                            </Stat>
                        </VStack>

                        <VStack
                            bg="green.50"
                            p={8}
                            borderRadius="2xl"
                            border="2px solid"
                            borderColor="green.200"
                            spacing={4}
                        >
                            <Icon as={HiCheckBadge} w={10} h={10} color="green.600" />
                            <Stat textAlign="center">
                                <StatNumber fontSize="5xl" fontWeight="900" color="green.600">99.8%</StatNumber>
                                <StatLabel fontSize="sm" fontWeight="700" color="gray.700">Precisión LegalTech</StatLabel>
                                <StatHelpText fontSize="xs" color="gray.500">Doble validación IA + Experto</StatHelpText>
                            </Stat>
                        </VStack>

                        <VStack
                            bg="orange.50"
                            p={8}
                            borderRadius="2xl"
                            border="2px solid"
                            borderColor="orange.200"
                            spacing={4}
                        >
                            <Icon as={FaClock} w={10} h={10} color="orange.500" />
                            <Stat textAlign="center">
                                <StatNumber fontSize="5xl" fontWeight="900" color="orange.600">3-5</StatNumber>
                                <StatLabel fontSize="sm" fontWeight="700" color="gray.700">Semanas</StatLabel>
                                <StatHelpText fontSize="xs" color="gray.500">Tiempo promedio mercado</StatHelpText>
                            </Stat>
                        </VStack>

                        <VStack
                            bg="blue.50"
                            p={8}
                            borderRadius="2xl"
                            border="2px solid"
                            borderColor="blue.200"
                            spacing={4}
                        >
                            <Icon as={FaRobot} w={10} h={10} color="blue.600" />
                            <Stat textAlign="center">
                                <StatNumber fontSize="5xl" fontWeight="900" color="blue.600">-70%</StatNumber>
                                <StatLabel fontSize="sm" fontWeight="700" color="gray.700">Tiempo de Espera</StatLabel>
                                <StatHelpText fontSize="xs" color="gray.500">Optimización de procesos</StatHelpText>
                            </Stat>
                        </VStack>
                    </SimpleGrid>

                    {/* Quote Box */}
                    <Box
                        bg="brand.950"
                        color="white"
                        p={12}
                        borderRadius="3xl"
                        maxW="4xl"
                        mx="auto"
                        borderLeft="4px solid"
                        borderColor="gold.400"
                        position="relative"
                    >
                        <Text fontSize="2xl" fontWeight="700" lineHeight="tall" mb={4} fontStyle="italic">
                            "1 de cada 5 compraventas sufre reparos o retrasos por errores de digitación o inconsistencias legales que un algoritmo detecta en segundos."
                        </Text>
                        <Text fontSize="sm" color="gray.400" fontWeight="600">
                            — Reporte de Eficiencia Notarial, 2024
                        </Text>
                    </Box>

                </VStack>
            </Container>
        </Box>
    );
};

export default WhyNow;
