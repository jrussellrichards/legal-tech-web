import React from 'react';
import { Box, Container, Flex, Text, Link, VStack, Heading, HStack, Icon, Divider } from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box bg="brand.950" color="white" pt={20} pb={10} borderTop="1px solid" borderColor="brand.800">
            <Container maxW="container.xl">
                <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="start" gap={12} mb={12}>
                    <Box maxW="sm">
                        <Text fontSize="3xl" fontWeight="900" color="white" mb={4} letterSpacing="tight">
                            Legal<Text as="span" color="gold.400">Tech</Text>
                        </Text>
                        <Text color="gray.400" lineHeight="relaxed" mb={6}>
                            Revolucionando el mercado legal inmobiliario con tecnología de punta y el respaldo de abogados expertos.
                        </Text>
                        <Text color="gray.500" fontSize="sm">
                            © {new Date().getFullYear()} Legal Tech SpA. <br />
                            Todos los derechos reservados.
                        </Text>
                    </Box>

                    <VStack align={{ base: 'start', md: 'end' }} spacing={4}>
                        <Heading as="h4" size="md" mb={2} color="white">Contacto</Heading>
                        <HStack color="gray.300" _hover={{ color: 'gold.400' }} transition="color 0.2s">
                            <Icon as={FaEnvelope} />
                            <Link href="mailto:contacto@legaltech.cl">contacto@legaltech.cl</Link>
                        </HStack>
                        <HStack color="gray.300" _hover={{ color: 'gold.400' }} transition="color 0.2s">
                            <Icon as={FaPhone} />
                            <Link href="tel:+56951096594">+56 9 5109 6594</Link>
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
