import { Box, Flex, Heading } from '@chakra-ui/react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Pagination from '../Pagination/Pagination';

type PropTypes = {
  title: string;
  children?: React.ReactNode;
  isPaginated?: boolean;
};

const Section = ({ title, children, isPaginated }: PropTypes) => {
  return (
    <Box>
      <SectionTitle title={title} />
      <Flex justifyContent={['center', 'start']} wrap="wrap" gap="20" pt="20" pb="10">
        {children ? (
          children
        ) : (
          <Box textAlign="center" w="100%">
            <Heading size="md">You have no {title}</Heading>
          </Box>
        )}
      </Flex>
      {isPaginated && (
        <Flex justifyContent="flex-end" pb="5">
          <Pagination />
        </Flex>
      )}
    </Box>
  );
};

Section.defaultProps = {
  isPaginated: false,
};

export default Section;
