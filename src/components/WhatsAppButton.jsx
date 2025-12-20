import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <Button
            as="a"
            href="https://wa.me/56951096594"
            target="_blank"
            rel="noopener noreferrer"
            position="fixed"
            bottom={8}
            right={8}
            zIndex="1000"
            bg="#25D366"
            _hover={{ bg: '#128C7E', transform: 'scale(1.1)' }}
            color="white"
            size="lg"
            px={6}
            h={16}
            borderRadius="full"
            boxShadow="dark-lg"
            leftIcon={<FaWhatsapp size="28px" />}
            className="group"
        >
            <Text display={{ base: 'none', group: 'block' }} fontWeight="bold" overflow="hidden" maxW="0" _groupHover={{ maxW: '200px', mr: 2 }} transition="all 0.3s" whiteSpace="nowrap">
                ¿Dudas? ¡Hablemos!
            </Text>
        </Button>
    );
};

export default WhatsAppButton;
