import React from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Avatar, Flex, Icon, Image, SimpleGrid } from '@chakra-ui/react';
import { FaLinkedinIn } from 'react-icons/fa6';
import rodrigoImg from '../assets/rodrigo.jpg';
import javierImg from '../assets/javier.jfif';
import rafaImg from '../assets/rafa.jfif';
import equipoImg from '../assets/equipo.jpg';

const TeamMemberCard = ({ name, role, description, image, linkedin }) => (
    <VStack
        bg="white"
        p={8}
        borderRadius="3xl"
        spacing={6}
        align="center"
        textAlign="center"
        boxShadow="xl"
        position="relative"
        transition="all 0.4s ease"
        role="group"
        h="full"
        _hover={{
            transform: 'translateY(-10px)',
            boxShadow: '2xl',
        }}
    >
        <Box
            p={1.5}
            borderRadius="full"
            bgGradient="linear(to-br, brand.400, gold.400)"
            boxShadow="lg"
            transition="all 0.4s ease"
            _groupHover={{ transform: 'scale(1.05)' }}
        >
            <Avatar
                size="2xl"
                w="180px"
                h="180px"
                name={name}
                src={image}
                border="5px solid white"
                bg="brand.900"
            />
        </Box>

        <VStack spacing={2} w="full">
            <HStack justify="center" spacing={3}>
                <Heading size="lg" color="brand.950" fontWeight="bold">
                    {name}
                </Heading>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <Icon
                        as={FaLinkedinIn}
                        w={5}
                        h={5}
                        color="gray.300"
                        cursor="pointer"
                        transition="all 0.3s"
                        _hover={{ color: '#0077b5', transform: 'scale(1.2)' }}
                    />
                </a>
            </HStack>
            <Text
                color="gold.600"
                fontWeight="bold"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="widest"
            >
                {role}
            </Text>
        </VStack>

        <Text color="gray.500" fontSize="md" lineHeight="tall">
            {description}
        </Text>
    </VStack>
);

const Team = () => {
    return (
        <Box py={32} bg="gray.50" id="team" position="relative" overflow="hidden">
            {/* Decorative Background Elements */}
            <Box position="absolute" top="0" left="0" w="full" h="full" bgGradient="linear(to-b, white, gray.50)" zIndex={0} />

            <Container maxW="container.xl" position="relative" zIndex={1}>
                {/* Header */}
                <Box textAlign="center" mb={20}>
                    <Text color="brand.600" fontWeight="bold" mb={3} textTransform="uppercase" fontSize="sm" letterSpacing="widest">
                        Nuestro Equipo
                    </Text>
                    <Heading as="h2" size="2xl" color="brand.950" mb={6} letterSpacing="tight">
                        Expertos unidos para brindarte soluciones integrales
                    </Heading>
                    <Text fontSize="xl" color="gray.500" maxW="2xl" mx="auto" lineHeight="tall">
                        La combinación perfecta entre experiencia legal tradicional e innovación tecnológica de vanguardia.
                    </Text>
                </Box>

                {/* Team Grid */}
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={24}>
                    <TeamMemberCard
                        name="Rodrigo"
                        role="CEO"
                        image={rodrigoImg}
                        linkedin="https://www.linkedin.com/in/rodrigo-campos-m%C3%BCllendorff/"
                        description="Visionario empresarial. Su misión es resolver tu problema garantizando una experiencia de servicio increíble."
                    />
                    <TeamMemberCard
                        name="Rafa"
                        role="Legal Lead"
                        image={rafaImg}
                        linkedin="https://www.linkedin.com/in/rafaella-solari-musa-b5bb0560/"
                        description="Lidera el equipo legal. Transforma conflictos complejos en soluciones blindadas para tu total tranquilidad."
                    />
                    <TeamMemberCard
                        name="Javier"
                        role="CTO"
                        image={javierImg}
                        linkedin="https://www.linkedin.com/in/javier-richards-valenzuela/"
                        description="Experto en IA legal. Lidera la tecnología que blinda tus intereses 24/7 con precisión absoluta y velocidad sin precedentes."
                    />
                </SimpleGrid>

                {/* Group Section - Reorganized */}
                <Box
                    borderRadius="3xl"
                    overflow="hidden"
                    boxShadow="2xl"
                    position="relative"
                    bg="brand.900"
                >
                    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={0}>
                        <Box position="relative" h={{ base: "400px", lg: "auto" }}>
                            <Image
                                src={equipoImg}
                                alt="Equipo Parley"
                                w="full"
                                h="full"
                                objectFit="cover"
                            />
                            <Box
                                position="absolute"
                                inset={0}
                                bgGradient="linear(to-r, blackAlpha.100, blackAlpha.600)"
                                display={{ base: "block", lg: "none" }}
                            />
                        </Box>

                        <Flex
                            direction="column"
                            justify="center"
                            p={{ base: 10, lg: 16 }}
                            bg="brand.900"
                            color="white"
                        >
                            <Heading size="xl" mb={6}>
                                Más que un estudio de abogados
                            </Heading>
                            <Text fontSize="lg" color="whiteAlpha.800" mb={8} lineHeight="relaxed">
                                Somos una familia de profesionales apasionados por redefinir los estándares de la justicia moderna.
                                Trabajamos cada día para que la tecnología sea un puente hacia un servicio legal más transparente y accesible.
                            </Text>

                            <HStack spacing={12} divider={<Box w="1px" h="40px" bg="whiteAlpha.300" />}>
                                <VStack align="start" spacing={0}>
                                    <Heading size="2xl" color="gold.400">+15</Heading>
                                    <Text fontSize="sm" opacity={0.7}>Años de exp.</Text>
                                </VStack>
                                <VStack align="start" spacing={0}>
                                    <Heading size="2xl" color="gold.400">100%</Heading>
                                    <Text fontSize="sm" opacity={0.7}>Compromiso</Text>
                                </VStack>
                            </HStack>
                        </Flex>
                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    );
};

export default Team;
