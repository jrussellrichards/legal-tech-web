import React from 'react';
import { Box, Container, Heading, Text, Button, Badge, Flex, SimpleGrid, Icon, Stat, StatLabel, StatNumber, useDisclosure } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaShieldHalved, FaFileContract, FaRobot, FaBullseye } from 'react-icons/fa6';
import { HiArrowRight, HiSparkles } from 'react-icons/hi2';
import ContactModal from './ContactModal';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const Hero = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box position="relative" bg="brand.950" overflow="hidden">
            {/* Background with Overlay */}
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                zIndex="0"
            >
                <Box
                    as="img"
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    alt="Office Background"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    objectPosition="center"
                    opacity="0.8"
                />
                <Box
                    position="absolute"
                    inset="0"
                    bgGradient="linear(to-b, brand.950, rgba(2, 6, 23, 0.9), brand.950)"
                    opacity="0.8"
                />
            </Box>

            {/* Content */}
            <Box position="relative" zIndex="1" pt={{ base: "32", md: "40" }} pb="20">
                <Container maxW="container.xl" textAlign="center">
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Flex justify="center" mb={6}>
                            <Badge
                                px={6} py={3}
                                borderRadius="full"
                                bg="whiteAlpha.100"
                                color="brick.400"
                                border="1px solid"
                                borderColor="whiteAlpha.200"
                                backdropFilter="blur(10px)"
                                fontSize="xs"
                                fontWeight="900"
                                letterSpacing="widest"
                                textTransform="uppercase"
                                display="flex"
                                alignItems="center"
                                gap={3}
                                boxShadow="0 4px 20px rgba(0,0,0,0.2)"
                            >
                                <Icon as={HiSparkles} />
                                Parley 2025
                            </Badge>
                        </Flex>

                        <MotionHeading
                            as="h1"
                            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                            fontWeight="900"
                            lineHeight="1.0"
                            letterSpacing="-0.04em"
                            color="white"
                            mb={8}
                            maxW="5xl"
                            mx="auto"
                        >Gestión integral
                            <br />
                            <Text as="span" bgGradient="linear(to-r, brick.300, brick.500)" bgClip="text">
                                de tu compraventa.
                            </Text>
                        </MotionHeading>

                        <MotionText
                            fontSize={{ base: "lg", md: "xl" }}
                            color="gray.300"
                            maxW="2xl"
                            mx="auto"
                            mb={4}
                            lineHeight="1.6"
                            fontWeight="400"
                        >
                            Servicios abogados inmobiliarios <Text as="span" color="white" fontWeight="600"></Text>
                        </MotionText>

                        <Text fontSize="lg" color="brick.400" fontWeight="bold" mb={10}>
                            Resolvemos cada trámite hasta la inscripción.
                        </Text>

                        <Flex
                            direction={{ base: 'column', sm: 'row' }}
                            justify="center"
                            gap={5}
                            align="center"
                            mb={12}
                        >
                            <Button
                                onClick={onOpen}
                                size="lg"
                                h="16"
                                px={10}
                                fontSize="md"
                                bg="brick.500"
                                color="brand.950"
                                rightIcon={<HiArrowRight />}
                                _hover={{ bg: 'brick.400', transform: 'scale(1.05)', boxShadow: '0 20px 30px -10px rgba(185, 92, 74, 0.4)' }}
                                borderRadius="full"
                                fontWeight="900"
                                letterSpacing="wide"
                            >
                                Asegurar Mi Inversión
                            </Button>
                        </Flex>

                        {/* Contact Modal */}
                        <ContactModal isOpen={isOpen} onClose={onClose} />

                        {/* Stats Section with Clarified Time */}
                        <SimpleGrid
                            columns={{ base: 1, md: 3 }}
                            spacing={8}
                            maxW="5xl"
                            mx="auto"
                        >
                            {[
                                { icon: FaBullseye, stat: "Precisión", label: "Doble Validación", sub: "Revisión IA + Abogado Senior" },
                                { icon: FaFileContract, stat: "Velocidad", label: "Gestión Inmediata", sub: "Iniciamos apenas nos contactas" },
                                { icon: FaShieldHalved, stat: "Garantía", label: "Protección Total", sub: "Tu inversión 100% blindada" }
                            ].map((item, i) => (
                                <Flex
                                    key={i}
                                    bg="whiteAlpha.50"
                                    backdropFilter="blur(16px)"
                                    p={8}
                                    borderRadius="2xl"
                                    border="1px solid"
                                    borderColor="whiteAlpha.100"
                                    direction="column"
                                    align="center"
                                    textAlign="center"
                                    transition="all 0.3s"
                                    _hover={{ bg: "whiteAlpha.100", transform: "translateY(-5px)", borderColor: "brick.500" }}
                                >
                                    <Icon as={item.icon} w={8} h={8} color="brick.400" mb={4} />
                                    <Stat>
                                        <StatNumber fontSize="4xl" fontWeight="900" color="white" mb={1}>{item.stat}</StatNumber>
                                        <StatLabel fontSize="md" fontWeight="700" color="gray.300" mb={2}>{item.label}</StatLabel>
                                        <Text fontSize="xs" color="gray.500">{item.sub}</Text>
                                    </Stat>
                                </Flex>
                            ))}
                        </SimpleGrid>

                    </MotionBox>
                </Container>
            </Box>
        </Box>
    );
};

export default Hero;
