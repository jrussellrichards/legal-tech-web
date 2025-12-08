import React from 'react';
import { Box, Container, Heading, Text, Button, Badge, VStack, HStack, Icon, Divider } from '@chakra-ui/react';

const Pricing = () => {
    return (
        <Box py={24} bg="brand.950" color="white" position="relative" overflow="hidden" id="pricing">
            {/* Background Decor */}
            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" w="600px" h="600px" bg="blue.600" opacity="0.2" borderRadius="full" filter="blur(100px)" />

            <Container maxW="container.lg" position="relative" zIndex="1" textAlign="center">
                <Heading as="h2" size="2xl" mb={6}>Tarifa Única y Transparente</Heading>
                <Text color="gray.400" maxW="2xl" mx="auto" mb={16} fontSize="lg">
                    Sin sorpresas. Un servicio de excelencia a un precio imbatible gracias a nuestra tecnología.
                </Text>

                <Box
                    maxW="md"
                    mx="auto"
                    bg="whiteAlpha.50"
                    backdropFilter="blur(20px)"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    borderRadius="3xl"
                    p={10}
                    _hover={{ borderColor: 'brand.500' }}
                    transition="all 0.5s"
                    boxShadow="2xl"
                    position="relative"
                >
                    <Badge
                        position="absolute"
                        top="-4"
                        left="50%"
                        transform="translateX(-50%)"
                        bgGradient="linear(to-r, blue.600, purple.600)"
                        color="white"
                        px={6}
                        py={1}
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight="bold"
                        boxShadow="lg"
                        textTransform="none"
                    >
                        OFERTA DE LANZAMIENTO
                    </Badge>

                    <Box mb={8}>
                        <Heading as="h3" size="lg" mb={2}>Paquete Completo</Heading>
                        <HStack justify="center" align="baseline" my={6} spacing={1}>
                            <Text fontSize="6xl" fontWeight="800">$500.000</Text>
                            <Text color="gray.400">CLP</Text>
                        </HStack>
                        <Text color="gray.400" fontSize="sm">Pago único, todo incluido</Text>
                    </Box>

                    <Divider borderColor="whiteAlpha.100" my={8} />

                    <VStack align="start" spacing={4} mb={10}>
                        {[
                            'Redacción de Promesa',
                            'Estudio de Títulos completo',
                            'Redacción Contrato Compraventa',
                            'Trámite Notarial',
                            'Inscripción Conservador (CBR)'
                        ].map((item, i) => (
                            <HStack key={i} color="gray.200">
                                <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" w={5} h={5} color="brand.500">
                                    <polyline points="20 6 9 17 4 12" />
                                </Icon>
                                <Text>{item}</Text>
                            </HStack>
                        ))}
                    </VStack>

                    <Button
                        w="full"
                        size="lg"
                        h={14}
                        bg="brand.500"
                        _hover={{ bg: 'blue.600', transform: 'translateY(-2px)' }}
                        color="white"
                        borderRadius="xl"
                        fontSize="lg"
                        boxShadow="lg"
                    >
                        Contratar Servicio
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Pricing;
