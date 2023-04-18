import { Flex, Box, Avatar, Text } from '@chakra-ui/react';

const CardDetails = () => {
  return (
    <Box>
      <Flex justifyContent="space-between">
        <Box>
          <Flex>
            <Avatar name="Bangladesh" src="/images/bd-govt.png" bg="transparent" />
            <Box ml="3">
              <Text fontWeight="bold">Bashundhara R/A 2466</Text>
              <Text fontSize="xs">Land Plot registry 4991</Text>
            </Box>
          </Flex>
        </Box>
        <Text fontSize="xs" mt="5">
          18 Dec 2022 12:45 am
        </Text>
      </Flex>
      <Text fontSize="sm" p="5">
        Plot 62, road 1, block A, Bashundhara R/A, Dhaka 1219 <br /> Registry No. 4991
      </Text>
    </Box>
  );
};

export default CardDetails;
