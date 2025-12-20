import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, VStack } from '@chakra-ui/react';

const HorizontalStep = ({ number, title, description, isLast }) => (
    <Box position="relative" w="full" px={4} textAlign="center">

        {/* Connector Line (Desktop Only) */}
        {!isLast && (
            <Box
                display={{ base: 'none', md: 'block' }}
                position="absolute"
                top="20px"
                left="50%"
                right="-50%"
                height="2px"
                bg="gray.200"
                zIndex={0}
            />
        )}

        <VStack spacing={6} position="relative" zIndex={1}>
            {/* Number Circle */}
            <Flex
                w={10}
                h={10}
                align="center"
                justify="center"
                borderRadius="full"
                bg="brand.950"
                color="brick.400"
                fontWeight="900"
                fontSize="lg"
                boxShadow="lg"
                border="2px solid"
                borderColor="brick.500"
            >
                {number}
            </Flex>

            {/* Content */}
            <Box>
                <Heading as="h3" size="sm" mb={3} color="brand.950" fontWeight="700">
                    {title}
                </Heading>
                <Text color="gray.500" fontSize="sm" lineHeight="relaxed" maxW="xs" mx="auto">
                    {description}
                </Text>
            </Box>
        </VStack>
    </Box>
);

const Services = () => {
    return (
        <Box py={24} bg="white" id="process">
            <Container maxW="container.xl">

                {/* Header Section */}
                <Box textAlign="center" mb={20} maxW="3xl" mx="auto">
                    <Text color="brick.500" fontWeight="bold" mb={4} fontSize="xs" letterSpacing="widest" textTransform="uppercase">
                        El Proceso
                    </Text>
                    <Heading as="h2" size="2xl" mb={6} color="brand.950" letterSpacing="-0.03em" fontWeight="900">
                        De la promesa a tu llave en mano.
                    </Heading>
                    <Text fontSize="lg" color="gray.500">
                        Un proceso blindado y acelerado: tú te enfocas en tu hogar, nosotros en la legalidad.
                    </Text>
                </Box>

                {/* Horizontal Timeline */}
                <SimpleGrid columns={{ base: 1, md: 5 }} spacing={{ base: 12, md: 0 }} position="relative">
                    <HorizontalStep
                        number="1"
                        title="Reserva & Antecedentes"
                        description="Aseguramos la propiedad y recopilamos los documentos clave."
                    />
                    <HorizontalStep
                        number="2"
                        title="Promesa de Compraventa"
                        description="Redactamos y estructuramos la promesa para blindar tu operación."
                    />
                    <HorizontalStep
                        number="3"
                        title="Estudio de Títulos"
                        description="Doble validación (IA + Abogado) para seguridad total."
                    />
                    <HorizontalStep
                        number="4"
                        title="Escritura & Firma"
                        description="Redacción del contrato final y coordinación notarial."
                    />
                    <HorizontalStep
                        number="5"
                        title="Inscripción & Entrega"
                        description="Seguimiento en CBR hasta que la propiedad es tuya."
                        isLast
                    />
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Services;
