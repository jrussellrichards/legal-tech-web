import React from 'react';
import { Box, Container, Flex, Text, Link, VStack, Heading, HStack, Icon, Divider, Image } from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logoImg from '../assets/logo.png';

const Footer = () => {
    return (
        <Box bg="brand.950" color="white" pt={20} pb={10} borderTop="1px solid" borderColor="brand.800">
            <Container maxW="container.xl">
                <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="start" gap={12} mb={12}>
                    <Box maxW="sm">
                        <Image
                            src={logoImg}
                            alt="Parley Logo"
                            h="150px"
                            mb={6}
                            filter="brightness(0) invert(1)"
                        />
                        <Text color="gray.400" lineHeight="relaxed" mb={6}>
                            Combinamos inteligencia artificial y expertos de élite para proteger tus decisiones más importantes.
                        </Text>
                        <Text color="gray.500" fontSize="sm">
                            © {new Date().getFullYear()} Parley SpA. <br />
                            Todos los derechos reservados.
                        </Text>
                    </Box>

                    <VStack align={{ base: 'start', md: 'end' }} spacing={4}>
                        <Heading as="h4" size="md" mb={2} color="white">Contacto</Heading>
                        <HStack color="gray.300" _hover={{ color: 'gold.400' }} transition="color 0.2s">
                            <Icon as={FaEnvelope} />
                            <Link href="mailto:contacto@parley.cl">contacto@parley.cl</Link>
                        </HStack>
                        <HStack color="gray.300" _hover={{ color: 'gold.400' }} transition="color 0.2s">
                            <Icon as={FaPhone} />
                            <Link href="tel:+56966888459">+56 9 6688 8459</Link>
                        </HStack>
                        <HStack color="gray.300">
                            <Icon as={FaMapMarkerAlt} />
                            <Text>Santiago, Chile</Text>
                        </HStack>
                    </VStack>
                </Flex>

                <Divider borderColor="brand.800" mb={8} />

                <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" gap={4}>
                    <Text color="gray.500" fontSize="sm" textAlign={{ base: 'center', md: 'left' }}>
                        Desarrollado con tecnología de vanguardia para tu seguridad.
                    </Text>
                    <HStack spacing={6} fontSize="sm" color="gray.400">
                        <Link _hover={{ color: 'gold.400' }}>Términos de Servicio</Link>
                        <Link _hover={{ color: 'gold.400' }}>Política de Privacidad</Link>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
};

export default Footer;
