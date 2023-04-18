import { Box, Flex, Heading } from '@chakra-ui/react';
import { MdVerified, MdNoteAdd, MdPeopleAlt } from 'react-icons/md';
import StepBox from '../StepBox/StepBox';

const GettingStarted = () => {
  return (
    <Box position="relative" w="100%" pb="10" mt="10">
      <Box textAlign="center">
        <Heading size="lg">Getting started</Heading>
      </Box>
      <Box position="relative">
        <Box
          background="gradient.step"
          position="absolute"
          zIndex={-2}
          filter="blur(110px)"
          w="100%"
          h={['200px', '80px']}
          top="6"
        />

        <Flex justifyContent="space-around" wrap="wrap" mt="10" gap={10}>
          <StepBox icon={MdNoteAdd} label="Issuer" link="/issuer" />
          <StepBox icon={MdVerified} label="Verifier" link="/verifier" />
          <StepBox icon={MdPeopleAlt} label="Holder" link="/holder" />
        </Flex>
      </Box>
    </Box>
  );
};

export default GettingStarted;
