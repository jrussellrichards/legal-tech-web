import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Icon, Flex } from '@chakra-ui/react';
import { FaFilePen, FaMagnifyingGlassChart, FaFileContract, FaBuildingColumns } from 'react-icons/fa6';

const ServiceItem = ({ number, title, description, icon }) => (
    <HStack
        align="start"
        spacing={6}
        p={6}
        borderRadius="2xl"
        _hover={{ bg: 'white', shadow: 'lg' }}
        transition="all 0.3s"
        role="group"
    >
        <Flex
            w={12}
            h={12}
            shrink={0}
            align="center"
            justify="center"
            bg="brand.100"
            color="brand.600"
            borderRadius="xl"
            _groupHover={{ bg: 'brand.600', color: 'white' }}
            transition="all 0.3s"
        >
            <Icon as={icon} w={5} h={5} />
        </Flex>
        <Box>
            <Heading as="h3" size="md" mb={2} color="brand.950">{title}</Heading>
            <Text color="gray.500" lineHeight="relaxed">{description}</Text>
        </Box>
    </HStack>
);

const Services = () => {
    return (
        <Box py={32} bg="gray.50" id="services" position="relative" overflow="hidden">
            <Box position="absolute" top={0} left={0} w="full" h="full" bgGradient="linear(to-b, gray.50, white)" zIndex={0} />

            <Container maxW="container.xl" position="relative" zIndex={1}>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={20} alignItems="center">
                    <Box>
                        <Text color="brand.600" fontWeight="bold" mb={2} letterSpacing="wide" textTransform="uppercase" fontSize="sm">
                            Servicio Integral
                        </Text>
                        <Heading as="h2" size="2xl" mb={6} color="brand.950" letterSpacing="tight">
                            De la Promesa a la Inscripción, sin fricción.
                        </Heading>
                        <Text fontSize="xl" color="gray.600" mb={12} lineHeight="tall">
                            Olvídate de perseguir documentos. Nosotros orquestamos todo el flujo legal para que tu única preocupación sea recibir las llaves.
                        </Text>

                        <VStack align="stretch" spacing={2}>
                            <ServiceItem
                                icon={FaFilePen}
                                title="1. Redacción de Promesa"
                                description="Blindamos tu inversión desde el día uno con cláusulas equilibradas."
                            />
                            <ServiceItem
                                icon={FaMagnifyingGlassChart}
                                title="2. Estudio de Títulos IA"
                                description="Revisión exhaustiva de 10 años de historia de la propiedad en horas."
                            />
                            <ServiceItem
                                icon={FaFileContract}
                                title="3. Contrato de Compraventa"
                                description="Borradores listos para firmar, validados por expertos inmobiliarios."
                            />
                            <ServiceItem
                                icon={FaBuildingColumns}
                                title="4. Gestión Notarial y CBR"
                                description="Coordinación remota completa hasta la inscripción final."
                            />
                        </VStack>
                    </Box>

                    <Box
                        bg="white"
                        p={2}
                        borderRadius="3xl"
                        boxShadow="2xl"
                        transform="rotate(-2deg)"
                        border="1px solid"
                        borderColor="gray.100"
                    >
                        <Box
                            bg="brand.950"
                            p={10}
                            borderRadius="2xl"
                            position="relative"
                            overflow="hidden"
                            color="white"
                            minH="500px"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box position="absolute" inset={0} bgGradient="radial(circle at top right, brand.600, transparent)" opacity={0.3} />

                            <Icon as={FaFileContract} w={20} h={20} mb={8} color="brand.200" />
                            <Heading size="lg" textAlign="center" mb={4}>Flujo Digital</Heading>

                            <VStack spacing={4} w="full" maxW="xs">
                                {['Recepción Antecedentes', 'Validación IA', 'Firma Digital', 'Propiedad Inscrita'].map((step, i) => (
                                    <Flex
                                        key={i}
                                        w="full"
                                        bg="whiteAlpha.100"
                                        p={3}
                                        borderRadius="lg"
                                        align="center"
                                        gap={3}
                                        border="1px solid"
                                        borderColor="whiteAlpha.100"
                                    >
                                        <Box w={6} h={6} borderRadius="full" bg={i === 3 ? "green.400" : "brand.500"} flexShrink={0} />
                                        <Text fontSize="sm" fontWeight="medium">{step}</Text>
                                    </Flex>
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
