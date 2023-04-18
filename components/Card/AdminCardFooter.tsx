import {
  Flex,
  Avatar,
  Box,
  Text,
  Icon,
  HStack,
  Image,
  Button,
  useBoolean,
  useToast,
} from '@chakra-ui/react';
import { RiThumbUpLine, RiThumbDownLine, RiChat3Line } from 'react-icons/ri';

type PropTypes = {
  count: string | number;
};

const ReactionCount = ({ count }: PropTypes) => {
  return (
    <Box
      position="absolute"
      border="1px solid"
      borderColor="white.200"
      borderRadius="10"
      top="-12px"
      right="-40px"
      zIndex={2}
      p="1px"
      minW="50px"
    >
      <HStack>
        <Image src="/images/reaction-icons.svg" alt="Icon" />
        <Text fontSize="x-small">{count}</Text>
      </HStack>
    </Box>
  );
};

type AdminFooterPropTypes = {
  title: string;
  note: string;
  date: string;
  likes: string;
  dislikes: string;
  comments: string;
};

const AdminCardFooter = (props: AdminFooterPropTypes) => {
  const { title, note, date, likes, dislikes, comments } = props;
  const [loading, setLoading] = useBoolean();
  const toast = useToast();

  const handleVote = () => {
    setLoading.on();
    setTimeout(() => {
      setLoading.off();
      toast({
        title: 'Success!',
        description: 'Voted Successfully!',
        status: 'success',
      });
    }, 3000);
  };

  return (
    <Box mt="6">
      <Flex justifyContent="space-between">
        <Text fontSize="xs">{date}</Text>
        <HStack gap="10" pr="6">
          <Box position="relative">
            <Button variant="link" isLoading={loading} onClick={handleVote}>
              <Icon fontSize="xl" as={RiThumbUpLine} />
            </Button>
            <ReactionCount count={likes} />
          </Box>
          <Box position="relative">
            <Button variant="link">
              <Icon fontSize="xl" as={RiThumbDownLine} />
            </Button>
            <ReactionCount count={dislikes} />
          </Box>
        </HStack>
      </Flex>
      <Flex justifyContent="space-between">
        <Box>
          <Flex>
            <Avatar name="Bangladesh" src="/images/bd-govt.png" bg="transparent" />
            <Box ml="3">
              <Text fontWeight="bold">{title}</Text>
              <Text fontSize="xs">{note}</Text>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Box position="relative">
            <Icon fontSize="2xl" as={RiChat3Line} mr="2" />
            <Box
              position="absolute"
              p="2px"
              w="20px"
              h="20px"
              borderRadius="50%"
              bg="white.200"
              top="-5px"
              right="-5px"
              fontSize="xs"
              zIndex={2}
              color="black"
              textAlign="center"
            >
              {comments}
            </Box>
          </Box>
        </Box>
      </Flex>
      {/* <Flex mt="2">
        <Avatar name="Bangladesh" src="/images/user.png" bg="transparent" />
        <Box ml="3">
          <Text fontSize="sm">
            Billal Hosain Nirab{' '}
            <Text as="span" fontSize="xx-small">
              {date}
            </Text>
          </Text>
          <Text fontSize="xx-small">Lorem ipsum is a placeholder text commonly</Text>
        </Box>
      </Flex> */}
    </Box>
  );
};

export default AdminCardFooter;
