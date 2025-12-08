import React from 'react';
import { Box, Container, Heading, Text, Grid, GridItem, Icon, VStack } from '@chakra-ui/react';
import { FaBoltLightning, FaCoins, FaUserTie, FaChartLine } from 'react-icons/fa6';

const BentoCard = ({ icon, title, text, bg = "white", colSpan = 1, textColor = "brand.950" }) => (
    <GridItem colSpan={{ base: 1, md: colSpan }}>
        <Box
            h="full"
            bg={bg}
            p={10}
            borderRadius="3xl"
            border="1px solid"
            borderColor={bg === "brand.950" ? "brand.800" : "gray.100"}
            boxShadow={bg === "white" ? "lg" : "dark-lg"}
            position="relative"
            overflow="hidden"
            transition="all 0.4s ease"
            _hover={{ transform: 'translateY(-5px)', shadow: '2xl' }}
            color={textColor}
        >
            <Box
                position="absolute"
                top={0}
                right={0}
                w="32"
                h="32"
                bg="brand.500"
                opacity={0.05}
                borderBottomLeftRadius="full"
            />

            <VStack align="start" spacing={6} h="full">
                <Box
                    p={4}
                    bg={bg === "brand.950" ? "whiteAlpha.200" : "brand.50"}
                    color={bg === "brand.950" ? "brand.200" : "brand.600"}
                    borderRadius="2xl"
                >
                    <Icon as={icon} w={6} h={6} />
                </Box>
                <Box>
                    <Heading as="h3" size="lg" mb={3} letterSpacing="tight">
                        {title}
                    </Heading>
                    <Text color={bg === "brand.950" ? "whiteAlpha.700" : "gray.500"} fontSize="lg" lineHeight="relaxed">
                        {text}
                    </Text>
                </Box>
            </VStack>
        </Box>
    </GridItem>
);

const Features = () => {
    return (
        <Box py={24} bg="white" position="relative">
            <Container maxW="container.xl">
                <Box mb={20} textAlign={{ base: "left", md: "center" }}>
                    <Text color="brand.600" fontWeight="bold" mb={2} letterSpacing="wide" textTransform="uppercase" fontSize="sm">
                        Nuestra Ventaja
                    </Text>
                    <Heading as="h2" size="2xl" color="brand.950" mb={4} letterSpacing="tight">
                        Tecnología que te da superpoderes
                    </Heading>
                    <Text fontSize="xl" color="gray.500" maxW="2xl" mx="auto">
                        La combinación perfecta entre la velocidad de la IA y el criterio experto de nuestros abogados.
                    </Text>
                </Box>

                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
                    {/* Main Hero Card */}
                    <BentoCard
                        colSpan={2}
                        icon={FaBoltLightning}
                        title="Velocidad Inigualable"
                        text="Procesamos y analizamos documentos 10 veces más rápido que un estudio tradicional, permitiéndote cerrar negocios en tiempo récord."
                    />

                    <BentoCard
                        icon={FaCoins}
                        title="Mejor Precio"
                        text="Automatización significa menos horas facturables y un costo fijo transparente de $500.000."
                    />

                    <BentoCard
                        icon={FaUserTie}
                        title="Abogados Expertos"
                        text="La IA detecta, el humano revisa. Garantizamos 100% de precisión jurídica."
                    />

                    <BentoCard
                        colSpan={2}
                        bg="brand.950"
                        textColor="white"
                        icon={FaChartLine}
                        title="Reportes Inteligentes"
                        text="Recibe informes ejecutivos claros, con semáforos de riesgo y recomendaciones accionables. Adiós a la jerga legal incomprensible."
                    />
                </Grid>
            </Container>
        </Box>
    );
};

export default Features;
