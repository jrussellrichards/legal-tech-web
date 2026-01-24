import React, { useState, useRef } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    VStack,
    Text,
    useToast,
    Box,
    Icon
} from '@chakra-ui/react';
import { FaShieldHalved } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';

// --------------------------------------------------------
// CONFIGURACIÓN DE EMAILJS
// Reemplaza estos valores con los que obtengas en tu panel de EmailJS
// --------------------------------------------------------
const SERVICE_ID = "service_56yujjd";
const TEMPLATE_ID = "template_9u1hlyt";
const PUBLIC_KEY = "6WoXr94hSEGwBmeAl";
// --------------------------------------------------------

const ContactModal = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const toast = useToast();
    const formRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Evento de Google Ads (Formulario)
        if (window.gtag) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-17838683862/ZnCWCMC39tgbENbtkrpC',
                'value': 1.0,
                'currency': 'CLP'
            });
        }

        try {
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                PUBLIC_KEY
            );

            toast({
                title: '¡Mensaje enviado!',
                description: 'Hemos recibido tu solicitud y te contactaremos a la brevedad.',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });

            onClose();
        } catch (error) {
            console.error('Error al enviar email:', error);
            toast({
                title: 'Error al enviar',
                description: 'Hubo un problema. Por favor intenta de nuevo o escríbenos directamente a contacto@parley.cl',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
            <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(10px)" />
            <ModalContent
                bg="white"
                borderRadius="2xl"
                boxShadow="2xl"
                mx={4}
                overflow="hidden"
            >
                {/* Header */}
                <Box bg="brand.950" py={8} px={8} textAlign="center">
                    <Icon as={FaShieldHalved} w={10} h={10} color="gold.400" mb={4} />
                    <ModalHeader p={0} color="white" fontSize="2xl" fontWeight="900">
                        Solicita tu Estudio
                    </ModalHeader>
                    <Text color="gray.400" fontSize="sm" mt={2}>
                        Completa tus datos y te contactaremos
                    </Text>
                </Box>

                <ModalCloseButton color="white" top={4} right={4} />

                <ModalBody py={8} px={8}>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <VStack spacing={5}>
                            <FormControl isRequired>
                                <FormLabel fontSize="sm" fontWeight="600" color="gray.700">
                                    Nombre completo
                                </FormLabel>
                                <Input
                                    name="name"
                                    placeholder="Tu nombre"
                                    size="lg"
                                    borderRadius="xl"
                                    borderColor="gray.200"
                                    _focus={{ borderColor: 'brand.600', boxShadow: '0 0 0 1px var(--chakra-colors-brand-600)' }}
                                    _placeholder={{ color: 'gray.400' }}
                                />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel fontSize="sm" fontWeight="600" color="gray.700">
                                    Email
                                </FormLabel>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="tu@email.com"
                                    size="lg"
                                    borderRadius="xl"
                                    borderColor="gray.200"
                                    _focus={{ borderColor: 'brand.600', boxShadow: '0 0 0 1px var(--chakra-colors-brand-600)' }}
                                    _placeholder={{ color: 'gray.400' }}
                                />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel fontSize="sm" fontWeight="600" color="gray.700">
                                    Teléfono
                                </FormLabel>
                                <Input
                                    name="phone"
                                    type="tel"
                                    placeholder="+56 9 6688 8459"
                                    size="lg"
                                    borderRadius="xl"
                                    borderColor="gray.200"
                                    _focus={{ borderColor: 'brand.600', boxShadow: '0 0 0 1px var(--chakra-colors-brand-600)' }}
                                    _placeholder={{ color: 'gray.400' }}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel fontSize="sm" fontWeight="600" color="gray.700">
                                    Mensaje (opcional)
                                </FormLabel>
                                <Textarea
                                    name="message"
                                    placeholder="¿Algún detalle sobre tu propiedad?"
                                    size="lg"
                                    borderRadius="xl"
                                    borderColor="gray.200"
                                    rows={3}
                                    _focus={{ borderColor: 'brand.600', boxShadow: '0 0 0 1px var(--chakra-colors-brand-600)' }}
                                    _placeholder={{ color: 'gray.400' }}
                                />
                            </FormControl>

                            <Button
                                type="submit"
                                w="full"
                                size="lg"
                                h={14}
                                bg="gold.500"
                                color="brand.950"
                                fontWeight="bold"
                                borderRadius="xl"
                                isLoading={isSubmitting}
                                loadingText="Enviando..."
                                _hover={{ bg: 'gold.400', transform: 'translateY(-2px)' }}
                                transition="all 0.2s"
                            >
                                Enviar solicitud
                            </Button>

                            <Text fontSize="xs" color="gray.500" textAlign="center">
                                Al enviar, aceptas nuestra política de privacidad.
                            </Text>
                        </VStack>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ContactModal;
