import {
  SimpleGrid,
  Box,
  Text,
  VStack,
  Heading,
  Container,
  Flex,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from 'react-icons/io5';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <Box as="footer">
      <Container maxW="container.xl">
        <SimpleGrid
          columns={[1, 4, 5]}
          spacing={10}
          py={5}
          mt={10}
          borderBottom="1px solid #f2f2f2"
        >
          <Box gridColumn={['1 span', '2 span']}>
            <Logo fontSize="24px" />
            <Text mt={5}>Issuing certificates on web3</Text>
          </Box>
          <Box>
            <VStack align="flex-start" gap="20px">
              <Heading size="md">About</Heading>
              <a href="#!">Product</a>
              <a href="#!">Terms & Condition</a>
              <a href="#!">FAQ</a>
            </VStack>
          </Box>
          <Box>
            <VStack align="flex-start" gap="20px">
              <Heading size="md">DeUniversity</Heading>
              <a href="#!">Our Team</a>
              <a href="#!">Partner With Us</a>
              <a href="#!">Privacy & Policy</a>
            </VStack>
          </Box>
          <Box>
            <VStack align="flex-start" gap="20px">
              <Heading size="md">Contact</Heading>
              <a href="#!">+9190000000</a>
              <a href="mailto:info@sambitsargam.in">info@sambitsargam.in</a>
            </VStack>
          </Box>
        </SimpleGrid>
        <Flex justifyContent="space-between" py="5">
          <Box>
            <HStack gap="5">
              <Icon as={IoLogoInstagram} />
              <Icon as={IoLogoFacebook} />
              <Icon as={IoLogoTwitter} />
            </HStack>
          </Box>
          <Text fontSize="sm">Copyright {new Date().getFullYear()} Team BlockSprit</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
