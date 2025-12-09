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
                    <HStack spacing={2} cursor="pointer" mr={isScrolled ? 8 : 0}>
                        <Box w={3} h={3} bg="gold.400" borderRadius="full" boxShadow="0 0 10px gold" />
                        <Text fontSize="xl" fontWeight="900" letterSpacing="-0.02em" color={isScrolled ? "white" : "white"}>
                            Legal<Text as="span" color="gold.400">Tech</Text>
                        </Text>
                    </HStack>

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
                        {['Seguridad', 'Proceso', 'Nosotros'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                fontWeight="500"
                                fontSize="sm"
                                color="whiteAlpha.900"
                                _hover={{ color: 'gold.400' }}
                                transition="color 0.2s"
                            >
                                {item}
                            </Link>
                        ))}
                    </HStack>

                    {/* CTA Button */}
                    <Button
                        as="a"
                        href="#pricing"
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
                        Iniciar Compra
                    </Button>
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
