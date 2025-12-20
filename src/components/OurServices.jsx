import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Link, useDisclosure } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaFileContract, FaShieldAlt, FaHandHoldingUsd, FaUserShield } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi2';
import ContactModal from './ContactModal';

const ServiceItem = ({ icon, title, description, link, isAvailable, showContact, onContact, accentColor = "gold" }) => (
    <VStack
        align="start"
        spacing={4}
        py={8}
        borderTop="2px solid"
        borderColor={isAvailable || showContact ? `${accentColor}.400` : "gray.200"}
        transition="all 0.3s"
        _hover={{
            borderColor: isAvailable || showContact ? `${accentColor}.500` : 'gray.300',
        }}
    >
        <Icon
            as={icon}
            w={8}
            h={8}
            color={isAvailable || showContact ? `${accentColor}.500` : "gray.300"}
        />

        <Heading
            size="md"
            color={isAvailable || showContact ? "brand.950" : "gray.400"}
            fontWeight="700"
        >
            {title}
        </Heading>

        {!isAvailable && !showContact && (
            <Text
                fontSize="xs"
                color="gray.400"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="wide"
            >
                Próximamente
            </Text>
        )}

        <Text color="gray.500" fontSize="sm" lineHeight="relaxed">
            {description}
        </Text>

        {isAvailable && link && (
            <Link
                as={RouterLink}
                to={link}
                color={`${accentColor}.600`}
                fontWeight="bold"
                fontSize="sm"
                display="flex"
                alignItems="center"
                gap={2}
                _hover={{ color: `${accentColor}.500`, gap: 3 }}
                transition="all 0.2s"
                mt="auto"
            >
                Ver servicio <Icon as={HiArrowRight} />
            </Link>
        )}

        {showContact && onContact && (
            <Link
                as="button"
                onClick={onContact}
                color={`${accentColor}.600`}
                fontWeight="bold"
                fontSize="sm"
                display="flex"
                alignItems="center"
                gap={2}
                _hover={{ color: `${accentColor}.500`, gap: 3 }}
                transition="all 0.2s"
                mt="auto"
            >
                Contactar <Icon as={HiArrowRight} />
            </Link>
        )}
    </VStack>
);

const OurServices = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box py={32} bg="white" id="services">
            <Container maxW="container.xl">
                {/* Header */}
                <Box textAlign="center" mb={16}>
                    <Text
                        color="gold.500"
                        fontWeight="bold"
                        mb={4}
                        textTransform="uppercase"
                        fontSize="sm"
                        letterSpacing="widest"
                    >
                        Soluciones
                    </Text>
                    <Heading
                        as="h2"
                        size="3xl"
                        color="brand.950"
                        letterSpacing="-0.03em"
                        fontWeight="900"
                        mb={6}
                    >
                        Nuestros Servicios
                    </Heading>
                    <Text fontSize="xl" color="gray.500" maxW="2xl" mx="auto">
                        Protección legal integral con tecnología de punta.
                    </Text>
                </Box>

                {/* Services in 4 columns */}
                <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={8}>
                    <ServiceItem
                        icon={FaFileContract}
                        title="Estudio de Títulos"
                        description="Análisis con IA y abogados expertos para asegurar tu compra inmobiliaria."
                        link="/estudio-titulos"
                        isAvailable={true}
                        accentColor="brick"
                    />
                    <ServiceItem
                        icon={FaShieldAlt}
                        title="Defensa Legal"
                        description="Representación estratégica para proteger tus derechos en disputas."
                        showContact={true}
                        onContact={onOpen}
                    />
                    <ServiceItem
                        icon={FaHandHoldingUsd}
                        title="Defensa de Deudores"
                        description="Reestructuración de deudas y defensa frente a cobranzas abusivas."
                        isAvailable={false}
                    />
                    <ServiceItem
                        icon={FaUserShield}
                        title="Asesoría Preventiva"
                        description="Revisión de contratos antes de firmar para evitar problemas."
                        isAvailable={false}
                    />
                </SimpleGrid>

                {/* Contact Modal */}
                <ContactModal isOpen={isOpen} onClose={onClose} />
            </Container>
        </Box>
    );
};

export default OurServices;
