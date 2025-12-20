import React from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Avatar, Flex, Icon, Image, SimpleGrid } from '@chakra-ui/react';
import { FaLinkedinIn } from 'react-icons/fa6';
import rodrigoImg from '../assets/rodrigo.jpg';
import javierImg from '../assets/javier.jfif';
import equipoImg from '../assets/equipo.jpg';

const TeamMemberCompact = ({ name, role, description, image }) => (
    <HStack
        bg="gray.50"
        p={6}
        borderRadius="2xl"
        spacing={5}
        align="start"
        transition="all 0.3s"
        _hover={{ bg: 'gray.100', transform: 'translateX(5px)' }}
    >
        <Avatar
            size="lg"
            name={name}
            src={image}
            bg="brand.900"
            color="white"
            border="3px solid white"
            boxShadow="lg"
        />
        <VStack align="start" spacing={1} flex={1}>
            <HStack justify="space-between" w="full">
                <Heading size="md" color="brand.950" fontWeight="bold">
                    {name}
                </Heading>
                <Icon
                    as={FaLinkedinIn}
                    w={4}
                    h={4}
                    color="gray.400"
                    cursor="pointer"
                    _hover={{ color: 'gold.500' }}
                    transition="color 0.2s"
                />
            </HStack>
            <Text color="gold.600" fontWeight="bold" fontSize="xs" textTransform="uppercase" letterSpacing="wider">
                {role}
            </Text>
            <Text color="gray.500" fontSize="sm" lineHeight="relaxed" mt={2}>
                {description}
            </Text>
        </VStack>
    </HStack>
);

const Team = () => {
    return (
        <Box py={32} bg="white" id="team">
            <Container maxW="container.xl">
                {/* Header */}
                <Box textAlign="center" mb={16}>
                    <Text color="brand.600" fontWeight="bold" mb={2} textTransform="uppercase" fontSize="sm" letterSpacing="wide">
                        Nuestro Equipo
                    </Text>
                    <Heading as="h2" size="2xl" color="brand.950" mb={6} letterSpacing="tight">
                        Conoce a quienes hacen esto posible
                    </Heading>
                    <Text fontSize="xl" color="gray.500" maxW="2xl" mx="auto">
                        Somos un equipo multidisciplinario compuesto por los mejores abogados y expertos en tecnología, unidos por una sola misión: protegerte.
                    </Text>
                </Box>

                {/* Two Column Layout: Photo + Members */}
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">

                    {/* Left: Team Photo */}
                    <Box position="relative">
                        <Box
                            position="absolute"
                            top="-15px"
                            left="-15px"
                            w="100%"
                            h="100%"
                            bg="gold.400"
                            borderRadius="3xl"
                            opacity="0.2"
                            transform="rotate(-2deg)"
                            zIndex={0}
                        />
                        <Image
                            src={equipoImg}
                            alt="Equipo Parley"
                            w="100%"
                            h={{ base: "350px", lg: "550px" }}
                            objectFit="cover"
                            objectPosition="center"
                            borderRadius="3xl"
                            boxShadow="2xl"
                            position="relative"
                            zIndex={1}
                        />
                    </Box>

                    {/* Right: Team Members */}
                    <VStack spacing={6} align="stretch">
                        <TeamMemberCompact
                            name="Rodrigo"
                            role="CEO & Founder"
                            image={rodrigoImg}
                            description="Visionario empresarial con más de 15 años liderando transformaciones digitales en el sector legal."
                        />
                        <TeamMemberCompact
                            name="Rafa"
                            role="Legal Lead & Founder"
                            description="Abogada especialista en Derecho Inmobiliario con experiencia en litigios de alto perfil."
                        />
                        <TeamMemberCompact
                            name="Javier"
                            role="CTO & Founder"
                            image={javierImg}
                            description="Arquitecto de software e ingeniero de IA. Fusiona la lógica legal con la potencia de los modelos de lenguaje."
                        />
                    </VStack>

                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Team;
