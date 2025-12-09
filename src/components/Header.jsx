import React, { useState, useEffect } from 'react';
import { Box, Container, Flex, Button, Text, Link, HStack } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box
            as="header"
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex="1000"
            py={4}
            px={4}
            pointerEvents="none" // Allow clicking through the empty space
        >
            <Container maxW="container.xl">
                <Flex
                    pointerEvents="auto" // Re-enable clicks on the header itself
                    as={motion.div}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, width: isScrolled ? '100%' : '100%' }}
                    justify="space-between"
                    align="center"
                    bg={isScrolled ? "rgba(255, 255, 255, 0.90)" : "rgba(255, 255, 255, 0.5)"}
                    backdropFilter="blur(12px)"
                    border="1px solid"
                    borderColor={isScrolled ? "gray.200" : "whiteAlpha.400"}
                    borderRadius="full"
                    py={3}
                    px={8}
                    boxShadow={isScrolled ? "lg" : "none"}
                    maxW={isScrolled ? "container.xl" : "container.lg"}
                    mx="auto"
                    transition="all 0.4s ease"
                >
                    <Text fontSize="xl" fontWeight="900" letterSpacing="tight" color="brand.950">
                        Legal<Text as="span" color="brand.600">Tech</Text>
                    </Text>

                    <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
                        <Link href="#benefits" fontWeight="600" fontSize="sm" color="gray.600" _hover={{ color: 'brand.600' }}>Seguridad</Link>
                        <Link href="#services" fontWeight="600" fontSize="sm" color="gray.600" _hover={{ color: 'brand.600' }}>Proceso</Link>
                        <Link href="#team" fontWeight="600" fontSize="sm" color="gray.600" _hover={{ color: 'brand.600' }}>Equipo</Link>
                        <Button
                            as="a"
                            href="#pricing"
                            size="sm"
                            colorScheme="blue"
                            bg="brand.950"
                            borderRadius="full"
                            px={6}
                            _hover={{ bg: 'brand.800', transform: 'scale(1.05)' }}
                        >
                            Iniciar Compra
                        </Button>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
