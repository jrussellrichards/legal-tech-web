import React from 'react';
import { Box, Container, Heading, Text, Button, Badge, VStack, HStack, Icon, Divider, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const Pricing = () => {
    return (
        <Box py={32} bg="brand.950" position="relative" overflow="hidden" id="pricing">
            {/* Mesh Gradient Background */}
            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                w="1000px"
                h="1000px"
                bgGradient="radial(circle, brand.600, transparent 70%)"
                opacity="0.15"
                filter="blur(100px)"
            />

            <Container maxW="container.lg" position="relative" zIndex="1" textAlign="center">
                <Heading as="h2" size="3xl" mb={6} color="white" letterSpacing="tight">
                    Tarifa Única
                </Heading>
                <Text color="gray.400" maxW="2xl" mx="auto" mb={20} fontSize="xl">
                    Sin costos ocultos ni sorpresas. Un precio cerrado por todo el servicio.
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
                    _before={{
                        content: '""',
                        position: 'absolute',
                        inset: '-1px',
                        padding: '1px',
                        borderRadius: '3xl',
                        bgGradient: 'linear(to-b, brand.400, transparent)',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude',
                        pointerEvents: 'none'
                    }}
                    boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                >
                    <Badge
                        position="absolute"
                        top="-5"
                        left="50%"
                        transform="translateX(-50%)"
                        bg="brand.500"
                        color="white"
                        px={8}
                        py={2}
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight="bold"
                        boxShadow="lg"
                        textTransform="uppercase"
                        letterSpacing="wider"
                    >
                        Pack Todo Incluido
                    </Badge>

                    <VStack spacing={2} mb={8}>
                        <Text color="gray.400" fontSize="lg" fontWeight="medium">Inversión Total</Text>
                        <HStack align="baseline" spacing={1}>
                            <Text fontSize="6xl" fontWeight="800" color="white" letterSpacing="tight">$500.000</Text>
                            <Text color="gray.500" fontSize="xl" fontWeight="bold">CLP</Text>
                        </HStack>
                    </VStack>

                    <Divider borderColor="whiteAlpha.100" mb={8} />

                    <List spacing={5} mb={10} textAlign="left">
                        {[
                            'Redacción de Promesa',
                            'Estudio de Títulos completo',
                            'Redacción Contrato Compraventa',
                            'Trámite Notarial',
                            'Inscripción Conservador (CBR)',
                            'Soporte Prioritario WhatsApp'
                        ].map((item, i) => (
                            <ListItem key={i} color="gray.300" display="flex" alignItems="center">
                                <ListIcon as={FaCheckCircle} color="brand.400" mr={4} w={5} h={5} />
                                <Text fontSize="lg">{item}</Text>
                            </ListItem>
                        ))}
                    </List>

                    <Button
                        w="full"
                        size="lg"
                        h={16}
                        bgGradient="linear(to-r, brand.500, brand.600)"
                        _hover={{ bgGradient: 'linear(to-r, brand.400, brand.500)', transform: 'translateY(-2px)', shadow: 'xl' }}
                        color="white"
                        borderRadius="2xl"
                        fontSize="xl"
                        fontWeight="bold"
                        boxShadow="lg"
                    >
                        Contratar Ahora
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Pricing;
