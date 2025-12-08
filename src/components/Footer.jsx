import React from 'react';
import { Box, Container, Flex, Text, Link, VStack, Heading } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box bg="brand.950" color="white" py={16} borderTop="1px solid" borderColor="gray.900">
            <Container maxW="container.xl">
                <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="start" gap={10} mb={12}>
                    <Box>
                        <Text fontSize="2xl" fontWeight="800" color="white" mb={4}>
                            Legal<Text as="span" color="brand.500">Tech</Text>
                        </Text>
                        <Text color="gray.400" maxW="xs" lineHeight="relaxed">
                            Revolucionando el mercado legal con tecnología e inteligencia artificial.
                        </Text>
                    </Box>
                    <Box textAlign={{ base: 'left', md: 'right' }}>
                        <Heading as="h4" size="md" mb={4} color="white">Contacto</Heading>
                        <VStack align={{ base: 'start', md: 'end' }} spacing={2}>
                            <Link href="mailto:contacto@legaltech.cl" color="gray.400" _hover={{ color: 'white' }}>contacto@legaltech.cl</Link>
                            <Link href="tel:+56912345678" color="gray.400" _hover={{ color: 'white' }}>+56 9 1234 5678</Link>
                        </VStack>
                    </Box>
                </Flex>

                <Box pt={8} borderTop="1px solid" borderColor="gray.900" textAlign="center">
                    <Text color="gray.600" fontSize="sm">
                        © {new Date().getFullYear()} Legal Tech. Todos los derechos reservados.
                    </Text>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
