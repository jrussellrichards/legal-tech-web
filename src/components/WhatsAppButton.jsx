import React from 'react';
import { Button, Text, Box } from '@chakra-ui/react';

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
            bg="green.500"
            _hover={{ bg: 'green.600', transform: 'scale(1.1)' }}
            color="white"
            size="lg"
            px={6}
            h={16}
            borderRadius="full"
            boxShadow="dark-lg"
            leftIcon={
                <Box as="span" fontSize="2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12.007 2.001c-5.522 0 -9.998 4.476 -9.998 9.998c0 1.83 .5 3.551 1.369 5.03l-1.378 4.969l5.071 -1.33c1.439 .816 3.109 1.289 4.887 1.289c5.526 .041 10.041 -4.434 10.041 -9.957c0 -5.523 -4.475 -10.001 -9.992 -10.001m.185 15.659a5.617 5.617 0 0 1 -2.716 -.693l-.229 -.134l-2.006 .527l.536 -1.947l-.142 -.244a5.645 5.645 0 0 1 -.839 -3.125c0 -3.125 2.541 -5.666 5.667 -5.666c3.125 0 5.666 2.541 5.666 5.666c0 3.125 -2.541 5.666 -5.679 5.616l-.258 .001m2.774 -3.61c.176 .24 .557 .415 .705 .447c.21 .046 .783 .109 1.15 -.417c.367 -.527 .367 -1.026 .257 -1.139l-.176 -.116c-.226 -.113 -.5-.184 -.744 -.206c-.305 .028 -.84 .208 -1.455 .817c-.771 .763 -1.35 2.162 -.603 3.332c.866 1.355 2.518 1.94 3.791 1.769c.531 -.071 .815 -.234 1.127 -.462c.209 -.153 .495 -.652 .309 -.857c-.126 -.138 -.43 -.23 -.606 -.326c-.287 -.154 -1.331 -.702 -1.536 -.757c-.205 -.055 -.346 -.005 -.462 .145c-.116 .15 -.47 .593 -.586 .743l-.154 .144" /></svg>
                </Box>
            }
            className="group"
        >
            <Text display={{ base: 'none', group: 'block' }} fontWeight="bold" overflow="hidden" maxW="0" _groupHover={{ maxW: '200px', mr: 2 }} transition="all 0.3s" whiteSpace="nowrap">
                ¿Dudas? ¡Hablemos!
            </Text>
        </Button>
    );
};

export default WhatsAppButton;
