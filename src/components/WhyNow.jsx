import React from 'react';
import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, Badge, Flex, StackDivider } from '@chakra-ui/react';
import { FaExclamationTriangle, FaShieldAlt, FaClock, FaCheckCircle, FaRobot, FaBalanceScale } from 'react-icons/fa';

const WhyNow = () => {
    return (
        <Box py={28} bg="white" position="relative" overflow="hidden">
            {/* Narrative Connector Line */}
            <Box
                position="absolute"
                top="0"
                left="50%"
                transform="translateX(-50%)"
                w="1px"
                h="100px"
                bgGradient="linear(to-b, transparent, brand.200)"
            />

            <Container maxW="container.lg">
                <VStack spacing={20}>

                    {/* ACT 1: THE INVISIBLE ENEMY */}
                    <Box textAlign="center" maxW="3xl" mx="auto" position="relative">
                        <Badge colorScheme="red" variant="solid" mb={4} px={4} py={1} borderRadius="full" textTransform="uppercase" letterSpacing="widest" fontSize="xs">Ten mucho cuidado</Badge>
                        <Heading as="h2" size="2xl" color="brand.950" mb={6} lineHeight="tight" fontWeight="900">
                            Un pequeño error humano <br />
                            <Text as="span" color="red.500">puede costar tu propiedad.</Text>
                        </Heading>
                        <Text fontSize="xl" color="gray.600" lineHeight="tall">
                            En Chile, el <strong>22% de las inscripciones</strong> se rechazan por errores evitables.
                            Los estudios tradicionales dependen de la vista cansada de un abogado revisando miles de fojas.
                            <Text as="span" fontWeight="bold" color="brand.800"> Nosotros eliminamos ese riesgo.</Text>
                        </Text>
                    </Box>

                    {/* ACT 2: THE EVIDENCE (Data Cards) */}
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
                        <Box
                            p={8}
                            borderRadius="3xl"
                            bg="gray.50"
                            border="1px solid"
                            borderColor="gray.100"
                            transition="all 0.3s"
                            _hover={{ transform: 'translateY(-5px)', shadow: 'xl', borderColor: 'red.200' }}
                        >
                            <Icon as={FaExclamationTriangle} w={8} h={8} color="red.400" mb={4} />
                            <Heading size="lg" mb={2} color="brand.950">Riesgo Real</Heading>
                            <Text color="gray.600">
                                Un titulo mal estudiado puede significar perder la propiedad años después. El error humano es la causa #1 de litigios.
                            </Text>
                        </Box>

                        <Box
                            p={8}
                            borderRadius="3xl"
                            bg="gray.50"
                            border="1px solid"
                            borderColor="gray.100"
                            transition="all 0.3s"
                            _hover={{ transform: 'translateY(-5px)', shadow: 'xl', borderColor: 'orange.200' }}
                        >
                            <Icon as={FaClock} w={8} h={8} color="orange.400" mb={4} />
                            <Heading size="lg" mb={2} color="brand.950">Tiempo Perdido</Heading>
                            <Text color="gray.600">
                                Semanas esperando una respuesta. Mientras tanto, la oportunidad de compra puede desaparecer o el crédito expirar.
                            </Text>
                        </Box>

                        <Box
                            p={8}
                            borderRadius="3xl"
                            bg="gray.50"
                            border="1px solid"
                            borderColor="gray.100"
                            transition="all 0.3s"
                            _hover={{ transform: 'translateY(-5px)', shadow: 'xl', borderColor: 'gold.400' }}
                        >
                            <Icon as={FaBalanceScale} w={8} h={8} color="gold.500" mb={4} />
                            <Heading size="lg" mb={2} color="brand.950">Sobreprecio</Heading>
                            <Text color="gray.600">
                                Pagar el 1% del valor de la propiedad es un modelo obsoleto. El trabajo legal es el mismo, valga lo que valga la casa.
                            </Text>
                        </Box>
                    </SimpleGrid>

                    {/* ACT 3: THE SOLUTION (Visual Comparison) */}
                    <Box w="full" bg="brand.950" borderRadius="3xl" overflow="hidden" position="relative" boxShadow="2xl">
                        <Box p={{ base: 8, md: 16 }} color="white">
                            <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" mb={12}>
                                <Box>
                                    <Text color="gold.400" fontWeight="bold" letterSpacing="wide" mb={2}>LA NUEVA ERA</Text>
                                    <Heading size="xl">Parley vs Tradicional</Heading>
                                </Box>
                                <Icon as={FaRobot} w={12} h={12} color="whiteAlpha.400" display={{ base: 'none', md: 'block' }} />
                            </Flex>

                            <VStack divider={<StackDivider borderColor="whiteAlpha.200" />} spacing={6} align="stretch">
                                <Flex justify="space-between" align="center">
                                    <Text color="gray.400" flex="1">Riesgo (Rechazo CBR)</Text>
                                    <Text color="red.300" flex="1" textAlign="center" textDecoration="line-through">22% Promedio</Text>
                                    <Text color="white" flex="1" textAlign="right" fontWeight="bold">Menos del 1% (Validación IA)</Text>
                                </Flex>
                                <Flex justify="space-between" align="center">
                                    <Text color="gray.400" flex="1">Tiempo Total</Text>
                                    <Text color="red.300" flex="1" textAlign="center" textDecoration="line-through">45-60 Días</Text>
                                    <Text color="white" flex="1" textAlign="right" fontWeight="bold">Gestión Acelerada</Text>
                                </Flex>
                                <Flex justify="space-between" align="center">
                                    <Text color="gray.400" flex="1">Costo Legal</Text>
                                    <Text color="red.300" flex="1" textAlign="center" textDecoration="line-through">1% Valor Propiedad</Text>
                                    <Text color="white" flex="1" textAlign="right" fontWeight="bold">Tarifa Plana Fija</Text>
                                </Flex>
                            </VStack>
                        </Box>

                        {/* Visual Flair */}
                        <Box position="absolute" top="0" right="0" w="300px" h="300px" bg="gold.500" filter="blur(150px)" opacity="0.1" />
                    </Box>

                </VStack>
            </Container>
        </Box>
    );
};

export default WhyNow;
