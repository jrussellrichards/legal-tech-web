import React from 'react';
import { Box, Container, Heading, Text, Button, Badge, VStack, HStack, SimpleGrid, List, ListItem, ListIcon, useDisclosure } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import ContactModal from './ContactModal';

const PricingCard = ({ title, price, originalPrice, features, isPopular, buttonText, onButtonClick }) => (
    <Box
        bg={isPopular ? "whiteAlpha.100" : "whiteAlpha.50"}
        backdropFilter="blur(20px)"
        border="2px solid"
        borderColor={isPopular ? "gold.400" : "whiteAlpha.200"}
        borderRadius="3xl"
        p={10}
        position="relative"
        boxShadow={isPopular ? "0 25px 50px -12px rgba(245, 158, 11, 0.3)" : "0 25px 50px -12px rgba(0, 0, 0, 0.3)"}
        transition="all 0.4s"
        _hover={{ transform: 'translateY(-8px)', borderColor: 'gold.400' }}
        transform={isPopular ? 'scale(1.05)' : 'scale(1)'}
    >
        {isPopular && (
            <Badge
                position="absolute"
                top="-4"
                left="50%"
                transform="translateX(-50%)"
                bg="gold.500"
                color="brand.950"
                px={6}
                py={2}
                borderRadius="full"
                fontSize="xs"
                fontWeight="bold"
                boxShadow="lg"
                textTransform="uppercase"
                letterSpacing="wider"
            >
                Ahorra $400.000
            </Badge>
        )}

        <VStack spacing={2} mb={8}>
            <Text color="gray.400" fontSize="md" fontWeight="bold" textTransform="uppercase" letterSpacing="wide">
                {title}
            </Text>

            {originalPrice && (
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color="gray.500"
                    textDecoration="line-through"
                >
                    ${originalPrice} CLP
                </Text>
            )}

            <HStack align="baseline" spacing={1}>
                <Text fontSize="5xl" fontWeight="900" color="white" letterSpacing="tight">${price}</Text>
                <Text color="gray.400" fontSize="lg" fontWeight="bold">CLP</Text>
            </HStack>

            {originalPrice && (
                <Text color="green.400" fontSize="sm" fontWeight="bold">
                    ¡Ahorras ${(parseInt(originalPrice.replace(/\./g, '')) - parseInt(price.replace(/\./g, ''))).toLocaleString('es-CL')}!
                </Text>
            )}
        </VStack>

        <List spacing={4} mb={10} textAlign="left">
            {features.map((item, i) => (
                <ListItem key={i} color="gray.300" display="flex" alignItems="flex-start">
                    <ListIcon as={FaCheckCircle} color="gold.400" mt={1} mr={3} w={4} h={4} />
                    <Text fontSize="sm" lineHeight="relaxed">{item}</Text>
                </ListItem>
            ))}
        </List>

        <Button
            w="full"
            size="lg"
            h={14}
            bg={isPopular ? "gold.500" : "whiteAlpha.200"}
            _hover={{
                bg: isPopular ? 'gold.400' : 'whiteAlpha.300',
                transform: 'translateY(-2px)'
            }}
            color={isPopular ? "brand.950" : "white"}
            borderRadius="full"
            fontSize="md"
            fontWeight="bold"
            onClick={onButtonClick}
        >
            {buttonText || "Comenzar"}
        </Button>
    </Box>
);

const Pricing = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

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

            <Container maxW="container.xl" position="relative" zIndex="1" textAlign="center">
                <Text color="gold.400" fontWeight="bold" mb={2} letterSpacing="wide" textTransform="uppercase" fontSize="sm">
                    Inversión
                </Text>
                <Heading as="h2" size="3xl" mb={6} color="white" letterSpacing="tight">
                    Tarifas Transparentes
                </Heading>
                <Text color="gray.300" maxW="2xl" mx="auto" mb={16} fontSize="xl" lineHeight="tall">
                    Elige el servicio que necesitas. Precios fijos, sin sorpresas.
                </Text>

                <SimpleGrid columns={{ base: 1, lg: 4 }} spacing={6} maxW="6xl" mx="auto">
                    {/* Plan 1: Promesa */}
                    <PricingCard
                        title="Promesa"
                        price="200.000"
                        features={[
                            'Redacción de Promesa de Compraventa',
                            'Revisión de condiciones legales',
                            'Asesoría en cláusulas clave',
                            'Soporte vía WhatsApp'
                        ]}
                        buttonText="Solicitar"
                        onButtonClick={onOpen}
                    />

                    {/* Plan 2: Estudio de Títulos */}
                    <PricingCard
                        title="Estudio de Títulos"
                        price="500.000"
                        features={[
                            'Estudio exhaustivo (10 años)',
                            'Doble validación: IA + Abogado',
                            'Informe detallado de riesgos',
                            'Certificados CBR incluidos',
                            'Soporte prioritario'
                        ]}
                        buttonText="Solicitar"
                        onButtonClick={onOpen}
                    />

                    {/* Plan 3: Escritura & Inscripción */}
                    <PricingCard
                        title="Escritura & Inscripción"
                        price="300.000"
                        features={[
                            'Redacción Contrato Definitivo',
                            'Coordinación Notarial',
                            'Inscripción en CBR',
                            'Seguimiento hasta entrega',
                            'Soporte dedicado'
                        ]}
                        buttonText="Solicitar"
                        onButtonClick={onOpen}
                    />

                    {/* Plan 4: Paquete Completo */}
                    <PricingCard
                        title="Todo Incluido"
                        price="600.000"
                        originalPrice="1.000.000"
                        isPopular={true}
                        features={[
                            'Promesa de Compraventa ($200k)',
                            'Estudio de Títulos ($500k)',
                            'Escritura & Inscripción ($300k)',
                            'Coordinación completa',
                            'Soporte VIP hasta la entrega'
                        ]}
                        buttonText="Comenzar Ahora"
                        onButtonClick={onOpen}
                    />
                </SimpleGrid>

                <Text color="gray.500" mt={12} fontSize="sm">
                    Todos los precios son en pesos chilenos (CLP) e incluyen IVA.
                </Text>

                {/* Contact Modal */}
                <ContactModal isOpen={isOpen} onClose={onClose} />
            </Container>
        </Box>
    );
};

export default Pricing;
