import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Avatar, Flex, Icon } from '@chakra-ui/react';
import { FaLinkedinIn } from 'react-icons/fa6';

const TeamMember = ({ name, role, description }) => (
    <VStack
        bg="white"
        p={10}
        borderRadius="3xl"
        boxShadow="xl"
        align="center"
        textAlign="center"
        transition="all 0.4s ease"
        _hover={{ transform: 'translateY(-10px)', boxShadow: '2xl', borderColor: 'gold.400' }}
        border="1px solid"
        borderColor="gray.100"
        position="relative"
        spacing={6}
    >
        <Box position="relative">
            <Avatar
                size="2xl"
                name={name}
                bg="brand.900"
                color="white"
                border="4px solid"
                borderColor="gray.50"
                boxShadow="lg"
            />
            <Flex
                position="absolute"
                bottom={0}
                right={0}
                bg="gold.500"
                w={10}
                h={10}
                borderRadius="full"
                align="center"
                justify="center"
                color="brand.950"
                boxShadow="md"
                border="3px solid white"
            >
                <Icon as={FaLinkedinIn} w={4} h={4} />
            </Flex>
        </Box>

        <VStack spacing={2}>
            <Heading size="lg" color="brand.950">{name}</Heading>
            <Text color="gold.600" fontWeight="bold" fontSize="xs" textTransform="uppercase" letterSpacing="widest">
                {role}
            </Text>
        </VStack>

        <Text color="gray.500" lineHeight="relaxed" fontSize="md">
            {description}
        </Text>
    </VStack>
);

const Team = () => {
    return (
        <Box py={32} bg="#F1F5F9" id="team">
            <Container maxW="container.xl">
                <Box textAlign="center" mb={20}>
                    <Text color="brand.600" fontWeight="bold" mb={2} textTransform="uppercase" fontSize="sm" letterSpacing="wide">
                        Nuestro Equipo
                    </Text>
                    <Heading as="h2" size="2xl" color="brand.950" mb={6} letterSpacing="tight">
                        La experiencia que respalda tu inversión
                    </Heading>
                    <Text fontSize="xl" color="gray.500" maxW="2xl" mx="auto">
                        Profesionales con trayectoria probada en derecho inmobiliario y tecnología de vanguardia.
                    </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    <TeamMember
                        name="Rodrigo"
                        role="CEO & Founder"
                        description="Visionario empresarial con más de 15 años liderando transformaciones digitales en el sector legal. Su foco es simplificar procesos complejos y devolver tiempo a las personas."
                    />
                    <TeamMember
                        name="Rafa"
                        role="Legal Lead & Founder"
                        description="Abogada especialista en Derecho Inmobiliario con experiencia en litigios de alto perfil. Su rigor jurídico asegura que cada contrato sea impecable y cada estudio exhaustivo."
                    />
                    <TeamMember
                        name="Javier"
                        role="CTO & Founder"
                        description="Arquitecto de software e ingeniero de IA. Fusiona la lógica legal con la potencia de los modelos de lenguaje para lograr una precisión y velocidad sin precedentes."
                    />
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Team;
