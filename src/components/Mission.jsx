import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Flex } from '@chakra-ui/react';
import { FaUserShield, FaBalanceScale, FaHandHoldingHeart } from 'react-icons/fa';

const Mission = () => {
    return (
        <Box py={32} bg="white" id="true-mission" position="relative">
            <Container maxW="container.xl">
                <VStack spacing={12} maxW="4xl" mx="auto" textAlign="center" mb={24}>
                    <Text color="gold.500" fontWeight="bold" fontSize="sm" letterSpacing="widest" textTransform="uppercase">
                        Nuestro Porqué
                    </Text>
                    <Heading as="h2" size="3xl" color="brand.950" lineHeight="1.2" fontWeight="900" letterSpacing="-0.02em">
                        Blindaje legal para <Text as="span" color="gold.500">personas y empresas</Text>.
                    </Heading>
                    <Text fontSize="2xl" color="gray.600" lineHeight="relaxed">
                        Creemos en un mundo donde la excelencia legal es el estándar. Nuestra misión es simple: democratizar la seguridad jurídica global para que operes sin fronteras ni riesgos.
                    </Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12} mb={16}>
                    <VStack bg="gray.50" p={10} borderRadius="3xl" align="start" spacing={6} transition="all 0.3s" _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}>
                        <Flex w={14} h={14} bg="brand.100" borderRadius="2xl" align="center" justify="center" color="brand.600">
                            <Icon as={FaUserShield} w={7} h={7} />
                        </Flex>
                        <Heading size="md" color="brand.950" fontWeight="bold">Protección de Activos</Heading>
                        <Text color="gray.600" fontSize="lg">
                            No solo revisamos documentos; blindamos tus intereses, negocios y patrimonio contra cualquier contingencia legal.
                        </Text>
                    </VStack>
                    <VStack bg="gray.50" p={10} borderRadius="3xl" align="start" spacing={6} transition="all 0.3s" _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}>
                        <Flex w={14} h={14} bg="gold.100" borderRadius="2xl" align="center" justify="center" color="gold.600">
                            <Icon as={FaBalanceScale} w={7} h={7} />
                        </Flex>
                        <Heading size="md" color="brand.950" fontWeight="bold">Justicia Accesible</Heading>
                        <Text color="gray.600" fontSize="lg">
                            Rompemos las barreras de costo y tiempo para que la excelencia legal esté al alcance de todos.
                        </Text>
                    </VStack>
                    <VStack bg="gray.50" p={10} borderRadius="3xl" align="start" spacing={6} transition="all 0.3s" _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}>
                        <Flex w={14} h={14} bg="brand.900" borderRadius="2xl" align="center" justify="center" color="white">
                            <Icon as={FaHandHoldingHeart} w={7} h={7} />
                        </Flex>
                        <Heading size="md" color="brand.950" fontWeight="bold">Cero Abusos</Heading>
                        <Text color="gray.600" fontSize="lg">
                            Usamos la tecnología para nivelar la cancha, impidiendo que la falta de información juegue en tu contra.
                        </Text>
                    </VStack>
                </SimpleGrid>

                {/* Visual Connector Line */}
                <Flex justify="center" w="full">
                    <Box h="100px" w="1px" bgGradient="linear(to-b, gray.200, transparent)" />
                </Flex>
            </Container>
        </Box>
    );
};

export default Mission;
