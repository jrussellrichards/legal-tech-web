import React from 'react';
import { Box, Container, Heading, Text, Button, Badge, Flex, Icon, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Hero = () => {
    return (
        <Box position="relative" pt="180px" pb="120px" overflow="hidden" bgGradient="linear(to-br, gray.50, gray.200)">
            {/* Abstract Background Orbs */}
            <Box position="absolute" top="-20%" right="-10%" w="800px" h="800px" bg="blue.500" opacity="0.05" borderRadius="full" filter="blur(100px)" />
            <Box position="absolute" bottom="0" left="-10%" w="600px" h="600px" bg="purple.500" opacity="0.05" borderRadius="full" filter="blur(80px)" />

            <Container maxW="container.lg" textAlign="center" position="relative" zIndex="1">
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Badge
                        px={4} py={2}
                        borderRadius="full"
                        bg="white"
                        color="brand.900"
                        border="1px solid"
                        borderColor="blue.100"
                        mb={8}
                        boxShadow="sm"
                        fontSize="sm"
                        textTransform="none"
                    >
                        🚀 Líderes en tecnología legal inmobiliaria
                    </Badge>

                    <Heading
                        as="h1"
                        fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                        fontWeight="800"
                        lineHeight="1.1"
                        letterSpacing="tight"
                        color="brand.950"
                        mb={6}
                    >
                        Estudios de Títulos con <br />
                        <Text as="span" bgGradient="linear(to-r, brand.500, purple.600)" bgClip="text">
                            Inteligencia Artificial
                        </Text>
                    </Heading>

                    <Text fontSize={{ base: "lg", md: "2xl" }} color="gray.600" maxW="2xl" mx="auto" mb={10}>
                        La firma legal más avanzada del mercado. Reducimos tiempos y costos con precisión milimétrica.
                    </Text>

                    <Flex justify="center" gap={4} wrap="wrap">
                        <Button
                            as="a"
                            href="#pricing"
                            size="lg"
                            h="16"
                            px={10}
                            fontSize="lg"
                            colorScheme="blue"
                            bg="brand.950"
                            _hover={{ bg: 'brand.500', transform: 'translateY(-2px)', boxShadow: 'xl' }}
                            transition="all 0.3s"
                            borderRadius="xl"
                        >
                            Iniciar Trámite
                        </Button>
                        <Button
                            as="a"
                            href="#services"
                            size="lg"
                            h="16"
                            px={8}
                            fontSize="lg"
                            variant="outline"
                            bg="white"
                            borderColor="gray.200"
                            color="gray.700"
                            _hover={{ bg: 'gray.50' }}
                            borderRadius="xl"
                        >
                            Nuestra Tecnología
                        </Button>
                    </Flex>

                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={20} color="gray.500" fontSize="sm" fontWeight="medium">
                        <Flex align="center" justify="center" gap={2}>
                            <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" w={5} h={5} color="brand.500">
                                <polyline points="20 6 9 17 4 12" />
                            </Icon>
                            Más rápido
                        </Flex>
                        <Flex align="center" justify="center" gap={2}>
                            <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" w={5} h={5} color="brand.500">
                                <polyline points="20 6 9 17 4 12" />
                            </Icon>
                            100% Online
                        </Flex>
                        <Flex align="center" justify="center" gap={2}>
                            <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" w={5} h={5} color="brand.500">
                                <polyline points="20 6 9 17 4 12" />
                            </Icon>
                            Asesoría Experta
                        </Flex>
                    </SimpleGrid>

                </MotionBox>
            </Container>
        </Box>
    );
};

export default Hero;
