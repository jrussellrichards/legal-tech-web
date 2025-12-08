import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Icon, VStack } from '@chakra-ui/react';

const FeatureCard = ({ icon, title, text }) => (
    <Box
        bg="white"
        p={8}
        borderRadius="2xl"
        border="1px solid"
        borderColor="gray.100"
        boxShadow="sm"
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl', borderColor: 'brand.500' }}
    >
        <Flex
            w="14"
            h="14"
            align="center"
            justify="center"
            bg="blue.50"
            color="brand.500"
            borderRadius="xl"
            fontSize="2xl"
            mb={6}
        >
            {icon}
        </Flex>
        <Heading as="h3" size="md" mb={3} color="brand.900">
            {title}
        </Heading>
        <Text color="gray.500" lineHeight="relaxed">
            {text}
        </Text>
    </Box>
);

const Features = () => {
    return (
        <Box py={24} bg="white" id="benefits">
            <Container maxW="container.xl">
                <Box textAlign="center" mb={16} maxW="2xl" mx="auto">
                    <Heading as="h2" size="2xl" mb={4} color="brand.950">
                        Por qué elegirnos
                    </Heading>
                    <Text fontSize="lg" color="gray.500">
                        Redefinimos el estándar legal combinando la experiencia humana con motores de IA.
                    </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                    <FeatureCard
                        icon="⚡"
                        title="Velocidad Inigualable"
                        text="Tiempos de entrega récord gracias a nuestro procesamiento asistido por IA."
                    />
                    <FeatureCard
                        icon="💰"
                        title="Precio Competitivo"
                        text="El mejor precio del mercado: $500.000 todo incluido. Sin costos ocultos."
                    />
                    <FeatureCard
                        icon="⚖️"
                        title="Abogados de Primer Nivel"
                        text="Supervisión experta humana garantizada para una precisión del 100%."
                    />
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Features;

// Helper imports that were missing in code block but generally exist in scope
import { Flex } from '@chakra-ui/react';
