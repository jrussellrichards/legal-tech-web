import React from 'react';
import { Box, Container, Heading, Text, Button, Badge, Flex, SimpleGrid, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaRocket, FaBolt, FaGlobe, FaCertificate } from 'react-icons/fa6';
import { HiArrowRight } from 'react-icons/hi2';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const Hero = () => {
    return (
        <Box position="relative" pt={{ base: "32", md: "48" }} pb="32" overflow="hidden" bg="gray.50">
            {/* Dynamic Background Blobs */}
            <MotionBox
                position="absolute"
                top="-20%"
                right="-10%"
                w={{ base: "400px", md: "800px" }}
                h={{ base: "400px", md: "800px" }}
                bg="brand.500"
                opacity="0.1"
                borderRadius="full"
                filter="blur(120px)"
                animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <MotionBox
                position="absolute"
                bottom="10%"
                left="-10%"
                w={{ base: "300px", md: "600px" }}
                h={{ base: "300px", md: "600px" }}
                bg="purple.500"
                opacity="0.1"
                borderRadius="full"
                filter="blur(100px)"
                animate={{ scale: [1, 1.1, 1], y: [0, -50, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />

            <Container maxW="container.xl" position="relative" zIndex="1" textAlign="center">
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Flex justify="center" mb={8}>
                        <Badge
                            px={4} py={2}
                            borderRadius="full"
                            bg="white"
                            color="brand.600"
                            border="1px solid"
                            borderColor="brand.100"
                            boxShadow="sm"
                            fontSize="sm"
                            textTransform="none"
                            display="flex"
                            alignItems="center"
                            gap={2}
                        >
                            <Box as="span" color="orange.400"><FaRocket /></Box>
                            Líderes en tecnología legal inmobiliaria
                        </Badge>
                    </Flex>

                    <MotionHeading
                        as="h1"
                        fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
                        fontWeight="800"
                        lineHeight="0.95"
                        letterSpacing="tight"
                        color="brand.950"
                        mb={6}
                    >
                        Estudios de Títulos <br />
                        <Text
                            as="span"
                            bgGradient="linear(to-r, brand.600, purple.600, brand.400)"
                            bgClip="text"
                            position="relative"
                            _after={{
                                content: "''",
                                position: 'absolute',
                                bottom: '10px',
                                left: 0,
                                w: 'full',
                                h: '20px',
                                bg: 'brand.500',
                                opacity: 0.1,
                                zIndex: -1,
                                transform: 'skewX(-10deg)',
                                display: { base: 'none', md: 'block' }
                            }}
                        >
                            Potenciados con IA
                        </Text>
                    </MotionHeading>

                    <MotionText
                        fontSize={{ base: "lg", md: "2xl" }}
                        color="gray.600"
                        maxW="2xl"
                        mx="auto"
                        mb={10}
                        lineHeight="tall"
                        fontWeight="medium"
                    >
                        Revolucionamos el sector inmobiliario. Aprobación legal en tiempo récord con precisión milimétrica y validación experta.
                    </MotionText>

                    <Flex
                        direction={{ base: 'column', sm: 'row' }}
                        justify="center"
                        gap={4}
                        align="center"
                        mb={20}
                    >
                        <Button
                            as="a"
                            href="#pricing"
                            size="lg"
                            h="16"
                            px={10}
                            fontSize="lg"
                            bg="brand.950"
                            color="white"
                            rightIcon={<HiArrowRight />}
                            _hover={{ bg: 'brand.800', transform: 'translateY(-2px)', boxShadow: 'xl' }}
                            transition="all 0.2s"
                            borderRadius="2xl"
                            boxShadow="lg"
                        >
                            Comenzar Ahora
                        </Button>
                        <Button
                            as="a"
                            href="#services"
                            size="lg"
                            h="16"
                            px={10}
                            fontSize="lg"
                            variant="outline"
                            bg="white"
                            color="brand.950"
                            border="1px solid"
                            borderColor="gray.200"
                            _hover={{ bg: 'gray.50', borderColor: 'brand.200' }}
                            borderRadius="2xl"
                            boxShadow="sm"
                        >
                            Ver Tecnología
                        </Button>
                    </Flex>

                    <SimpleGrid
                        columns={{ base: 1, md: 3 }}
                        spacing={8}
                        maxW="4xl"
                        mx="auto"
                        bg="white"
                        p={2}
                        borderRadius="3xl"
                        boxShadow="sm"
                        border="1px solid"
                        borderColor="gray.100"
                    >
                        {[
                            { icon: FaBolt, text: "Entrega Express", subtext: "Análisis 4x más rápido" },
                            { icon: FaGlobe, text: "100% Digital", subtext: "Sin trámites presenciales" },
                            { icon: FaCertificate, text: "Garantía Legal", subtext: "Revisión doble experto" }
                        ].map((feature, i) => (
                            <Flex
                                key={i}
                                align="center"
                                justify="center"
                                gap={4}
                                p={4}
                                borderRadius="2xl"
                                _hover={{ bg: 'gray.50' }}
                                transition="bg 0.2s"
                            >
                                <Box
                                    p={3}
                                    bg="brand.50"
                                    color="brand.600"
                                    borderRadius="xl"
                                >
                                    <Icon as={feature.icon} w={5} h={5} />
                                </Box>
                                <Box textAlign="left">
                                    <Text fontWeight="bold" fontSize="sm" color="brand.950">{feature.text}</Text>
                                    <Text fontSize="xs" color="gray.500">{feature.subtext}</Text>
                                </Box>
                            </Flex>
                        ))}
                    </SimpleGrid>

                </MotionBox>
            </Container>
        </Box>
    );
};

export default Hero;
