/* eslint-disable jsx-a11y/alt-text */
import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";
import Card from "../Card/Card";

const About = () => {
  return (
    <Container maxW="container.xl" py="10">
      <SimpleGrid columns={[1, 2]} gap={[5, 10]}>
        <SimpleGrid columns={[2, 1]} gap={[5, 10]}>
          <Image
            boxSize="500px" src="https://nist.edu/images/nist.png"
          />
        </SimpleGrid>
        <Box my="auto">
          <Heading size="xl">
            DeUniversity: the next gen certificate built on web3 for
            transparency and security
          </Heading>
          <Text mt="5">
            We aim to implement a new certificate system that is built on the
            Ethereum ecosystem, Providing a decentralized way to verify and
            store certificates. With the help of our platform you can issue your
            own certificates and share them with others. Verifiers provide
            authenticity to our certificates making them more secure and trusted
          </Text>
          <Box mt="5">
            <Button variant="outline" mr="5">
              Learn More
            </Button>
            <Button variant="outline">FAQ</Button>
          </Box>
        </Box>
        <Box ml="auto">
          <Box position="relative">
            <Box
              w="100px"
              h="100px"
              bg="pink.100"
              pos="absolute"
              zIndex={-2}
              filter="blur(100px)"
              left="-5"
              top="-5"
            />
            {/* <Card hoverEffect={false} /> */}
            <Box
              w="100px"
              h="100px"
              bg="cyan.100"
              pos="absolute"
              zIndex={-2}
              filter="blur(100px)"
              right="-5"
              bottom="-5"
            />
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default About;
