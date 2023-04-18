import { Flex, Avatar, Box, Text, Icon } from '@chakra-ui/react';
import { IoHeartOutline } from 'react-icons/io5';

type PropTypes = {
  title: string;
  note: string;
  date: string;
  likes: string;
};
const CardFooter = (props: PropTypes) => {
  const { title, note, date, likes } = props;

  return (
    <Flex justifyContent="space-between" mt="4">
      <Flex>
        <Avatar name="Bangladesh" src="/images/bd-govt.png" bg="transparent" />
        <Box ml="3">
          <Text fontWeight="bold">{title}</Text>
          <Text fontSize="xs">{note}</Text>
        </Box>
      </Flex>
      <Box textTransform="uppercase" textAlign="right">
        <Text fontSize="xs">{date}</Text>
        <Text fontSize="xs">
          <Icon as={IoHeartOutline} mr="2" /> {likes}
        </Text>
      </Box>
    </Flex>
  );
};

export default CardFooter;
