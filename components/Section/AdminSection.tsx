import { Box, Flex, Heading } from '@chakra-ui/react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Pagination from '../Pagination/Pagination';

type PropTypes = {
  title: string;
  isPaginated?: boolean;
  children?: React.ReactNode;
};

const AdminSection = ({ title, isPaginated, children }: PropTypes) => {
  return (
    <Box>
      <SectionTitle title={title} />
      <Flex justifyContent={['center', 'flex-start']} wrap="wrap" gap="20" pt="20" pb="10">
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

export default AdminSection;
