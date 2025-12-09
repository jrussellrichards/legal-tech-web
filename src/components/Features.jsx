import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon } from '@chakra-ui/react';
import { FaBolt, FaWallet, FaUserCheck, FaSearch } from 'react-icons/fa';

const FeatureItem = ({ icon, title, text }) => (
    <VStack
        align="start"
        spacing={4}
        p={6}
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-5px)' }}
    >
        <Box
            p={3}
            bg="brand.50"
            color="brand.900"
            borderRadius="xl"
            mb={2}
        >
            <Icon as={icon} w={6} h={6} />
        </Box>
        <Heading size="md" color="brand.950" fontWeight="700" letterSpacing="-0.01em">
            {title}
        </Heading>
        <Text color="gray.500" fontSize="md" lineHeight="1.8">
            {text}
        </Text>
    </VStack>
);

const Features = () => {
    return (
        <Box py={32} bg="white">
            <Container maxW="container.xl">
                {/* Minimalist Header */}
                <Box mb={24} textAlign="center" maxW="2xl" mx="auto">
                    <Text color="gold.500" fontWeight="bold" mb={4} fontSize="xs" letterSpacing="widest" textTransform="uppercase">
                        Nuestra Esencia
                    </Text>
                    <Heading as="h2" size="2xl" color="brand.950" mb={6} letterSpacing="-0.03em" fontWeight="900" lineHeight="1.1">
                        Precisión que da paz mental.
                    </Heading>
                    <Text fontSize="lg" color="gray.500">
                        Combinamos tecnología con experiencia legal para eliminar la incertidumbre.
                    </Text>
                </Box>

                {/* Airy Grid */}
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} px={{ base: 4, md: 0 }}>
                    <FeatureItem
                        icon={FaBolt}
                        title="Velocidad Real"
                        text="Informes listos en 72 horas. Sin las semanas de espera tradicionales."
                    />

                    <FeatureItem
                        icon={FaWallet}
                        title="Ahorro Directo"
                        text="Tarifa fija de $500.000. Tu inversión va a la propiedad, no a comisiones."
                    />

                    <FeatureItem
                        icon={FaUserCheck}
                        title="Firma Experta"
                        text="Abogados senior validan lo que la IA procesa. Lo mejor de dos mundos."
                    />

                    <FeatureItem
                        icon={FaSearch}
                        title="Lupa Legal"
                        text="Detectamos riesgos invisibles en títulos de 10 años de antigüedad."
                    />
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Features;
