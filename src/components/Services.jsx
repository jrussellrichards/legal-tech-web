import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Icon, Flex, Circle } from '@chakra-ui/react';
import { FaFileSignature, FaLandmark, FaMagnifyingGlass, FaHouseCircleCheck } from 'react-icons/fa6';

const FlowItem = ({ number, title, text }) => (
    <Flex gap={6} position="relative" mb={8}>
        <Box position="relative" zIndex={1}>
            <Circle
                size={10}
                bg="brand.600"
                color="white"
                fontWeight="bold"
                shadow="md"
            >
                {number}
            </Circle>
            {/* Connector Line */}
            {number !== 4 && (
                <Box
                    position="absolute"
                    top={10}
                    left="50%"
                    transform="translateX(-50%)"
                    w="2px"
                    h="calc(100% + 20px)"
                    bg="gray.300" // Slightly darker for visibility
                    zIndex={-1}
                />
            )}
        </Box>
        <Box pb={4}>
            <Heading size="md" mb={2} color="brand.950">{title}</Heading>
            <Text color="gray.500" lineHeight="relaxed">{text}</Text>
        </Box>
    </Flex>
);

const Services = () => {
    return (
        <Box py={32} bg="#F1F5F9" id="services"> {/* Slighly darker shade for separation */}
            <Container maxW="container.xl">
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={20} alignItems="center">
                    <Box>
                        <Text color="brand.600" fontWeight="bold" mb={2} letterSpacing="wide" textTransform="uppercase" fontSize="sm">
                            Flujo de Trabajo
                        </Text>
                        <Heading as="h2" size="2xl" mb={6} color="brand.950" letterSpacing="tight">
                            Simplificamos lo complejo.
                        </Heading>
                        <Text fontSize="xl" color="gray.600" mb={12}>
                            Desde la recepción de antecedentes hasta la inscripción en el Conservador. Nosotros nos encargamos de la burocracia.
                        </Text>

                        <SimpleGrid columns={2} spacing={6}>
                            <Box p={8} bg="white" borderRadius="2xl" border="1px solid" borderColor="gray.100" shadow="md">
                                <Icon as={FaMagnifyingGlass} w={6} h={6} color="brand.600" mb={4} />
                                <Heading size="sm" mb={2} color="brand.900">Rigurosidad</Heading>
                                <Text fontSize="sm" color="gray.600">Revisión exhaustiva al detalle.</Text>
                            </Box>
                            <Box p={8} bg="white" borderRadius="2xl" border="1px solid" borderColor="gray.100" shadow="md">
                                <Icon as={FaLandmark} w={6} h={6} color="brand.600" mb={4} />
                                <Heading size="sm" mb={2} color="brand.900">Gestión</Heading>
                                <Text fontSize="sm" color="gray.600">Trámites notariales incluidos.</Text>
                            </Box>
                        </SimpleGrid>
                    </Box>

                    <Box
                        bg="white"
                        p={12}
                        borderRadius="3xl"
                        boxShadow="2xl"
                        border="1px solid"
                        borderColor="gray.100"
                    >
                        <Heading size="lg" mb={8} color="brand.950">Tu Camino a Casa</Heading>
                        <VStack align="stretch" spacing={0}>
                            <FlowItem
                                number={1}
                                title="Recopilación y Promesa"
                                text="Aseguramos el negocio y reunimos los documentos."
                            />
                            <FlowItem
                                number={2}
                                title="Estudio de Títulos"
                                text="Análisis legal profundo con apoyo de IA."
                            />
                            <FlowItem
                                number={3}
                                title="Firma Notarial"
                                text="Coordinamos tu cita para firmar sin esperas."
                            />
                            <FlowItem
                                number={4}
                                title="Inscripción CBR"
                                text="Tramitamos hasta obtener el dominio a tu nombre."
                            />
                        </VStack>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Services;
