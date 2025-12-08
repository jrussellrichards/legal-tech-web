import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Circle, Flex } from '@chakra-ui/react';

const ServiceItem = ({ number, title, description }) => (
    <HStack align="start" spacing={6} mb={8} className="group">
        <Circle
            size="12"
            bg="brand.950"
            color="white"
            fontWeight="bold"
            fontSize="lg"
            flexShrink={0}
            _groupHover={{ bg: 'brand.500' }}
            transition="all 0.3s"
            boxShadow="lg"
        >
            {number}
        </Circle>
        <Box>
            <Heading as="h3" size="md" mb={2} color="brand.900" _groupHover={{ color: 'brand.500' }}>{title}</Heading>
            <Text color="gray.500" lineHeight="relaxed">{description}</Text>
        </Box>
    </HStack>
);

const Services = () => {
    return (
        <Box py={24} bg="gray.50" id="services">
            <Container maxW="container.xl">
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="center">
                    <Box>
                        <Heading as="h2" size="2xl" mb={6} color="brand.950">
                            Todo lo que necesitas en un solo servicio
                        </Heading>
                        <Text fontSize="lg" color="gray.600" mb={12}>
                            Nos encargamos de todo el proceso legal de compraventa, de principio a fin, para que tú solo te preocupes de firmar.
                        </Text>

                        <VStack align="stretch" spacing={2}>
                            <ServiceItem
                                number="1"
                                title="Redacción de la Promesa"
                                description="Aseguramos el negocio con una promesa de compraventa sólida y equilibrada."
                            />
                            <ServiceItem
                                number="2"
                                title="Estudio de Títulos Riguroso"
                                description="Análisis profundo de los antecedentes de la propiedad utilizando IA para detectar cualquier irregularidad."
                            />
                            <ServiceItem
                                number="3"
                                title="Redacción Contrato de Compraventa"
                                description="Elaboración del contrato final con todas las cláusulas necesarias para tu seguridad."
                            />
                            <ServiceItem
                                number="4"
                                title="Notaría e Inscripción (CBR)"
                                description="Gestión completa: envío de documentos a notaría e inscripción en el Conservador de Bienes Raíces."
                            />
                        </VStack>
                    </Box>

                    <Box position="relative">
                        <Box position="absolute" inset="0" bg="blue.500" opacity="0.05" filter="blur(60px)" borderRadius="full" transform="rotate(3deg)" />
                        <Box position="relative" bg="white" p={10} borderRadius="3xl" boxShadow="xl" border="1px solid" borderColor="gray.100">
                            <Heading as="h3" size="lg" mb={8} textAlign="center" color="brand.900">Flujo de Trabajo Simplificado</Heading>
                            <VStack spacing={6}>
                                {['Recepción de Antecedentes', 'Análisis IA + Revisión Abogado', 'Redacción y Firma', 'Inscripción CBR'].map((step, index) => (
                                    <React.Fragment key={index}>
                                        <Box w="full" p={4} bg="gray.50" borderRadius="xl" border="1px solid" borderColor="gray.100" textAlign="center" fontWeight="medium" color="gray.700" _hover={{ borderColor: 'brand.500', color: 'brand.500', bg: 'white' }} transition="all 0.3s">
                                            {step}
                                        </Box>
                                        {index < 3 && <Box h={6} w="2px" bg="gray.200" />}
                                    </React.Fragment>
                                ))}
                            </VStack>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Services;
