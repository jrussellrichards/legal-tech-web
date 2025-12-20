import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Icon, Flex, Badge } from '@chakra-ui/react';
import { FaUserTie, FaRobot, FaClipboardCheck, FaGavel, FaBolt, FaBullseye } from 'react-icons/fa6';

const ProcessStepHorizontal = ({ number, icon, title, description, isLast }) => (
    <VStack align="center" spacing={4} position="relative" w="full" zIndex={1}>
        {/* Connector Line (Absolute behind - Desktop only) */}
        {!isLast && (
            <Box
                position="absolute"
                top="32px"
                left="50%"
                transform="translateX(-50%)"
                w="full"
                h="2px"
                bg="gray.200"
                zIndex={-1}
                display={{ base: "none", md: "block" }}
            />
        )}

        {/* Icon Circle */}
        <Flex
            w={16}
            h={16}
            bg="white"
            border="2px solid"
            borderColor="gold.500"
            color="brand.950"
            borderRadius="full"
            align="center"
            justify="center"
            fontSize="2xl"
            boxShadow="lg"
            zIndex={2}
        >
            <Icon as={icon} w={7} h={7} />
        </Flex>

        {/* Content */}
        <VStack align="center" spacing={2} textAlign="center">
            <Badge colorScheme="gold" fontSize="xs" px={2} borderRadius="full">Paso {number}</Badge>
            <Heading size="md" color="brand.950" fontSize="lg">{title}</Heading>
            <Text color="gray.600" fontSize="sm" lineHeight="relaxed" maxW="200px">
                {description}
            </Text>
        </VStack>
    </VStack>
);

const Methodology = () => {
    return (
        <Box py={32} bg="white" position="relative" overflow="hidden" id="methodology">
            <Container maxW="container.xl">
                {/* Header & Intro */}
                <VStack spacing={8} textAlign="center" maxW="4xl" mx="auto" mb={24}>
                    <Box>
                        <Text color="gold.500" fontWeight="bold" fontSize="sm" letterSpacing="widest" textTransform="uppercase" mb={4}>
                            Nuestra Metodología
                        </Text>
                        <Heading size="3xl" color="brand.950" fontWeight="900" lineHeight="1.1" mb={6}>
                            Soluciones Legales para el <br />
                            <Text as="span" color="gold.500">Siglo XXI.</Text>
                        </Heading>
                        <Text fontSize="xl" color="gray.500" lineHeight="relaxed">
                            Nos dimos cuenta de que los estudios tradicionales siguen operando con lógicas del siglo pasado, lo que los hace lentos y propensos al error. Por eso creamos un nuevo estándar donde la experiencia legal dirige y valida la potencia de la IA.
                        </Text>
                    </Box>

                    {/* Stats Cards - Centered and Compact */}
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full" maxW="3xl">
                        <HStack p={6} bg="brand.950" borderRadius="2xl" color="white" boxShadow="xl" spacing={5} justify="center">
                            <Box p={3} bg="whiteAlpha.200" borderRadius="xl">
                                <Icon as={FaBolt} w={6} h={6} color="gold.400" />
                            </Box>
                            <Box textAlign="left">
                                <Heading size="lg" color="gold.400" lineHeight="1">10x</Heading>
                                <Text fontWeight="bold" fontSize="md">Más Rápidos</Text>
                            </Box>
                        </HStack>

                        <HStack p={6} bg="gray.50" borderRadius="2xl" border="1px solid" borderColor="gray.200" spacing={5} justify="center">
                            <Box p={3} bg="brand.100" borderRadius="xl">
                                <Icon as={FaBullseye} w={6} h={6} color="brand.600" />
                            </Box>
                            <Box textAlign="left">
                                <Heading size="lg" color="brand.950" lineHeight="1">+25%</Heading>
                                <Text fontWeight="bold" fontSize="md" color="brand.950">Más Precisos</Text>
                            </Box>
                        </HStack>
                    </SimpleGrid>
                </VStack>

                {/* Horizontal Timeline Steps */}
                <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8} alignItems="start">
                    <ProcessStepHorizontal
                        number={1}
                        icon={FaUserTie}
                        title="Estrategia Inicial"
                        description="Un abogado experto analiza tu caso y define la hoja de ruta estratégica."
                    />
                    <ProcessStepHorizontal
                        number={2}
                        icon={FaRobot}
                        title="Ejecución con IA"
                        description="Agentes de IA generan borradores legales completos."
                    />
                    <ProcessStepHorizontal
                        number={3}
                        icon={FaClipboardCheck}
                        title="Auditoría IA"
                        description="Un 'Agente Supervisor' verifica inconsistencias."
                    />
                    <ProcessStepHorizontal
                        number={4}
                        icon={FaGavel}
                        title="Validación Final"
                        description="El abogado revisa, afina y aprueba el resultado final."
                        isLast={true}
                    />
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Methodology;
