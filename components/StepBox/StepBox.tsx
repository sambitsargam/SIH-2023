import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { IconType } from 'react-icons';

type PropTypes = {
  icon: IconType;
  label: string;
  link: string;
};

const StepBox = ({ icon, label, link }: PropTypes) => {
  return (
    <Box>
      <Link href={link}>
        <a>
          <Flex
            width="150px"
            height="138px"
            bg="blackAlpha.200"
            boxShadow="inset 2.01px -2.01px 20px rgba(214, 214, 214, 0.17), inset -3.01333px 3.01333px 3.01333px rgba(255, 255, 255, 0.39)"
            backdropFilter="blur(74.4293px)"
            borderRadius="25px"
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={icon} fontSize="5xl" />
          </Flex>
          <Text mt="5" textAlign="center" fontWeight="bold">
            {label}
          </Text>
        </a>
      </Link>
    </Box>
  );
};

export default StepBox;
