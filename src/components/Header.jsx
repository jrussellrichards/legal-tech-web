import React, { useState, useEffect } from 'react';
import { Box, Container, Flex, Button, Text, Link, HStack } from '@chakra-ui/react';

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
            top="0"
            w="100%"
            zIndex="1000"
            transition="all 0.3s"
            bg={isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent'}
            backdropFilter={isScrolled ? 'blur(10px)' : 'none'}
            borderBottom={isScrolled ? '1px solid' : 'none'}
            borderColor="gray.200"
            boxShadow={isScrolled ? 'sm' : 'none'}
            py={4}
        >
            <Container maxW="container.xl">
                <Flex justify="space-between" align="center">
                    <Text fontSize="2xl" fontWeight="800" letterSpacing="tight" color="brand.950">
                        Legal<Text as="span" color="brand.500">Tech</Text>
                    </Text>

                    <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
                        <Link href="#benefits" fontWeight="500" _hover={{ color: 'brand.500' }}>Beneficios</Link>
                        <Link href="#services" fontWeight="500" _hover={{ color: 'brand.500' }}>Servicios</Link>
                        <Button as="a" href="#pricing" colorScheme="blue" bg="brand.500" borderRadius="xl" px={6}>
                            Contratar Ahora
                        </Button>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
