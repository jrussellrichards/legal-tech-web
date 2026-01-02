import React, { useState, useEffect } from 'react';
import { Box, Container, Flex, Button, Text, Link, HStack, Image } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleHomeClick = (e) => {
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <Box
            as="header"
            position="fixed"
            top={4}
            left={0}
            right={0}
            zIndex="1000"
            pointerEvents="none"
        >
            <Container maxW="container.xl">
                <Flex
                    pointerEvents="auto"
                    as={motion.div}
                    layout
                    initial={{ y: -20, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        width: isScrolled ? 'fit-content' : '100%',
                        backgroundColor: isScrolled ? "rgba(2, 6, 23, 0.85)" : "transparent",
                        borderColor: isScrolled ? "rgba(250, 204, 21, 0.3)" : "transparent",
                    }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                    justify="space-between"
                    align="center"
                    backdropFilter={isScrolled ? "blur(16px)" : "blur(0px)"}
                    border="1px solid"
                    borderRadius="full"
                    py={3}
                    px={isScrolled ? 8 : 0}
                    mx="auto"
                    boxShadow={isScrolled ? "0 10px 30px -10px rgba(0,0,0,0.5)" : "none"}
                >
                    {/* Logo Area */}
                    <Link
                        as={RouterLink}
                        to="/"
                        onClick={handleHomeClick}
                        mr={isScrolled ? 8 : 0}
                        display="flex"
                        alignItems="center"
                    >
                        <Image
                            src={logoImg}
                            alt="Parley Logo"
                            h="90px"
                            width="auto"
                            objectFit="contain"
                            filter="brightness(0) invert(1)" // White logo for dark bg/overlay
                        />
                    </Link>

                    {/* Navigation - Hidden on Mobile */}
                    <HStack
                        spacing={8}
                        display={{ base: 'none', md: 'flex' }}
                        bg={isScrolled ? "transparent" : "rgba(0,0,0,0.3)"} // Subtle bg on hero for readability
                        p={isScrolled ? 0 : 2}
                        px={isScrolled ? 0 : 6}
                        borderRadius={isScrolled ? "none" : "full"}
                        backdropFilter={isScrolled ? "none" : "blur(10px)"}
                        border={isScrolled ? "none" : "1px solid rgba(255,255,255,0.1)"}
                    >
                        {/* Inicio Link */}
                        <Link
                            as={RouterLink}
                            to="/"
                            onClick={handleHomeClick}
                            fontWeight="500"
                            fontSize="sm"
                            color="whiteAlpha.900"
                            _hover={{ color: 'gold.400' }}
                            transition="color 0.2s"
                        >
                            Inicio
                        </Link>

                        {[
                            { name: 'Servicios', href: '#services' },
                            { name: 'Nosotros', href: '#methodology' },
                            { name: 'Equipo', href: '#team' },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                fontWeight="500"
                                fontSize="sm"
                                color="whiteAlpha.900"
                                _hover={{ color: 'gold.400' }}
                                transition="color 0.2s"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </HStack>

                    {/* CTA Button */}
                    <Button
                        as="a"
                        href="#services"
                        size="sm"
                        ml={isScrolled ? 8 : 4}
                        bg={isScrolled ? "gold.400" : "white"}
                        color={isScrolled ? "brand.950" : "brand.950"}
                        borderRadius="full"
                        px={6}
                        fontWeight="bold"
                        _hover={{
                            transform: 'translateY(-2px)',
                            bg: isScrolled ? "gold.300" : "gray.100",
                            boxShadow: "lg"
                        }}
                    >
                        Comenzar
                    </Button>
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
