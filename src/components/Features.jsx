import React from 'react';
import { Box, Container, Heading, Text, Grid, GridItem, Icon, VStack } from '@chakra-ui/react';
import { FaBoltLightning, FaCoins, FaUserTie, FaChartLine } from 'react-icons/fa6';

const BentoCard = ({ icon, title, text, colSpan = 1 }) => (
    <GridItem colSpan={{ base: 1, md: colSpan }}>
        <Box
            h="full"
            bg="white"
            p={10}
            borderRadius="3xl"
            border="1px solid"
            borderColor="gray.100"
            boxShadow="xl" // Elevated shadow
            position="relative"
            overflow="hidden"
            transition="all 0.4s ease"
            _hover={{ transform: 'translateY(-5px)', shadow: '2xl', borderColor: 'yellow.400' }}
        >
            <VStack align="start" spacing={6} h="full">
                <Box
                    p={4}
                    bg="brand.50"
                    color="brand.600"
                    borderRadius="2xl"
                >
                    <Icon as={icon} w={6} h={6} />
                </Box>
                <Box>
                    <Heading as="h3" size="lg" mb={3} letterSpacing="tight" color="brand.950">
                        {title}
                    </Heading>
                    <Text color="gray.500" fontSize="lg" lineHeight="relaxed">
                        {text}
                    </Text>
                </Box>
            </VStack>
        </Box>
    </GridItem>
);

const Features = () => {
    return (
        <Box py={24} bg="#F8FAFC"> {/* Unified light background */}
            <Container maxW="container.xl">
                <Box mb={16} textAlign="center" maxW="3xl" mx="auto">
                    <Text color="brand.600" fontWeight="bold" mb={2} letterSpacing="wide" textTransform="uppercase" fontSize="sm">
                        Nuestra Diferencia
                    </Text>
                    <Heading as="h2" size="2xl" color="brand.950" mb={6} letterSpacing="tight">
                        Tecnología al servicio de su tranquilidad
                    </Heading>
                    <Text fontSize="xl" color="gray.500">
                        No solo somos rápidos. Somos exhaustivos. Nuestra metodología detecta riesgos que el ojo humano podría pasar por alto.
                    </Text>
                </Box>

                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
                    <BentoCard
                        colSpan={2}
                        icon={FaBoltLightning}
                        title="Velocidad sin Precedentes"
                        text="Gracias a nuestros algoritmos de procesamiento documental, entregamos informes de títulos en una fracción del tiempo habitual."
                    />

                    <BentoCard
                        icon={FaCoins}
                        title="Ahorro Inteligente"
                        text="Estudios tradicionales cobran sobre $800.000 (o el 1% de la propiedad). Nosotros cobramos una tarifa plana de $500.000."
                    />

                    <BentoCard
                        icon={FaUserTie}
                        title="Expertos Legales"
                        text="Cada documento es validado y firmado por un abogado senior especialista en derecho inmobiliario."
                    />

                    <BentoCard
                        colSpan={2}
                        icon={FaChartLine}
                        title="Transparencia Total"
                        text="Informe de estado en tiempo real. Sabrás exactamente en qué etapa está tu compraventa, sin tener que llamar para preguntar."
                    />
                </Grid>
            </Container>
        </Box>
    );
};

export default Features;
