import React from 'react';
import { Box, Container, Heading, Text, Button, Badge, VStack, HStack, Icon, Divider, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const Pricing = () => {
    return (
        <Box py={32} bg="brand.950" position="relative" overflow="hidden" id="pricing">
            {/* Subtle gradient background */}
            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                w="1000px"
                h="1000px"
                bgGradient="radial(circle, brand.700, transparent 70%)"
                opacity="0.15"
                filter="blur(100px)"
            />

            <Container maxW="container.lg" position="relative" zIndex="1" textAlign="center">
                <Text color="gold.400" fontWeight="bold" mb={2} letterSpacing="wide" textTransform="uppercase" fontSize="sm">
                    Inversión
                </Text>
                <Heading as="h2" size="3xl" mb={6} color="white" letterSpacing="tight">
                    Tarifa Transparente
                </Heading>
                <Text color="gray.300" maxW="2xl" mx="auto" mb={20} fontSize="xl" lineHeight="tall">
                    Un solo precio. Todo incluido. Sin incrementos por el valor de la propiedad.
                </Text>

                <Box
                    maxW="md"
                    mx="auto"
                    bg="whiteAlpha.50"
                    backdropFilter="blur(20px)"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    borderRadius="3xl"
                    p={12}
                    position="relative"
                    boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                    transition="all 0.4s"
                    _hover={{ transform: 'translateY(-5px)', borderColor: 'gold.400' }}
                >
                    <Badge
                        position="absolute"
                        top="-4"
                        left="50%"
                        transform="translateX(-50%)"
                        bg="gold.500"
                        color="brand.950"
                        px={8}
                        py={2}
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight="bold"
                        boxShadow="lg"
                        textTransform="uppercase"
                        letterSpacing="wider"
                    >
                        Oferta Especial
                    </Badge>

                    <VStack spacing={2} mb={8}>
                        <Text color="gray.300" fontSize="lg" fontWeight="medium">Precio Fijo</Text>
                        <HStack align="baseline" spacing={1}>
                            <Text fontSize="6xl" fontWeight="900" color="white" letterSpacing="tight">$500.000</Text>
                            <Text color="gray.400" fontSize="xl" fontWeight="bold">CLP</Text>
                        </HStack>
                        <Text color="gold.400" fontSize="sm" fontWeight="bold">vs $800.000+ del mercado</Text>
                    </VStack>

                    <Divider borderColor="whiteAlpha.200" my={8} />

                    <List spacing={5} mb={10} textAlign="left">
                        {[
                            'Redacción de Promesa de Compraventa',
                            'Estudio de Títulos exhaustivo (10 años)',
                            'Redacción Contrato Definitivo',
                            'Coordinación y Trámite Notarial',
                            'Inscripción Conservador de Bienes Raíces',
                            'Soporte Prioritario vía WhatsApp'
                        ].map((item, i) => (
                            <ListItem key={i} color="gray.200" display="flex" alignItems="center">
                                <ListIcon as={FaCheckCircle} color="gold.400" mr={4} w={5} h={5} />
                                <Text fontSize="md" lineHeight="relaxed">{item}</Text>
                            </ListItem>
                        ))}
                    </List>

                    <Button
                        w="full"
                        size="lg"
                        h={16}
                        bg="gold.500"
                        _hover={{ bg: 'gold.400', transform: 'translateY(-2px)', boxShadow: '0 20px 30px -10px rgba(245, 158, 11, 0.3)' }}
                        color="brand.950"
                        borderRadius="full"
                        fontSize="lg"
                        fontWeight="bold"
                    >
                        Iniciar mi Compraventa
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Pricing;
