import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Flex } from '@chakra-ui/react';
import { FaBolt, FaWallet, FaUserCheck, FaSearch } from 'react-icons/fa';

const FeatureItem = ({ icon, title, text, color }) => (
    <VStack
        align="start"
        spacing={5}
        p={8}
        bg="white"
        borderRadius="2xl"
        border="1px solid"
        borderColor="gray.100"
        transition="all 0.3s ease"
        _hover={{
            transform: 'translateY(-8px)',
            boxShadow: 'xl',
            borderColor: `${color}.200`
        }}
        height="100%"
        justify="space-between"
    >
        <Box>
            <Flex
                align="center"
                justify="center"
                w={14}
                h={14}
                borderRadius="2xl"
                bgGradient={`linear(to-br, ${color}.50, ${color}.100)`}
                color={`${color}.500`}
                mb={6}
                boxShadow="sm"
            >
                <Icon as={icon} w={7} h={7} />
            </Flex>
            <Heading size="md" color="brand.950" fontWeight="800" mb={3} letterSpacing="-0.01em">
                {title}
            </Heading>
            <Text color="gray.600" fontSize="md" lineHeight="1.7">
                {text}
            </Text>
        </Box>
    </VStack>
);

const Features = () => {
    return (
        <Box py={32} bg="gray.50" id="benefits">
            <Container maxW="container.xl">
                {/* Header Section */}
                <Box mb={20} textAlign="center" maxW="3xl" mx="auto">
                    <Text color="gold.500" fontWeight="bold" mb={4} fontSize="sm" letterSpacing="widest" textTransform="uppercase">
                        Inquebrantable
                    </Text>
                    <Heading as="h2" size="2xl" color="brand.950" mb={6} letterSpacing="-0.03em" fontWeight="900" lineHeight="1.1">
                        La única forma de eliminar <br />
                        <Text as="span" bgGradient="linear(to-r, brand.600, brand.400)" bgClip="text" position="relative">
                            el error humano.
                        </Text>
                    </Heading>
                    <Text fontSize="xl" color="gray.500" maxW="2xl" mx="auto">
                        El ojo humano se cansa. Nuestra tecnología analiza el 100% de la historia registral sin omitir una sola coma. Precisión absoluta para tu tranquilidad.
                    </Text>
                </Box>

                {/* Rich Grid */}
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
                    <FeatureItem
                        icon={FaBolt}
                        color="red"
                        title="Cero Fatiga"
                        text="Un abogado revisa cientos de páginas y se cansa. Nuestra IA analiza cada carácter con la misma precisión, del primero al último."
                    />

                    <FeatureItem
                        icon={FaSearch}
                        color="purple"
                        title="Cobertura Total"
                        text="No hacemos muestreo. Auditamos el 100% de la historia registral de los últimos 10 años. Nada se nos escapa."
                    />

                    <FeatureItem
                        icon={FaUserCheck}
                        color="blue"
                        title="Doble Validación"
                        text="La potencia de la IA detecta patrones invisibles, y un abogado senior certifica la estrategia legal final."
                    />

                    <FeatureItem
                        icon={FaWallet}
                        color="green"
                        title="Inscripción Segura"
                        text="Al eliminar errores técnicos en el estudio, reducimos drásticamente la tasa de rechazo en el Conservador."
                    />
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Features;
