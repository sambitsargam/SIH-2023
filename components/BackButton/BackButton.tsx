import { useRouter } from 'next/router';
import { Box, Button } from '@chakra-ui/react';
import { RiArrowGoBackLine } from 'react-icons/ri';

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Box textAlign="right">
      <Button variant="link" leftIcon={<RiArrowGoBackLine />} color="white" onClick={handleBack}>
        Back
      </Button>
    </Box>
  );
};

export default BackButton;
