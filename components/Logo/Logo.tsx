import { Text } from '@chakra-ui/react';

type PropTypes = {
  fontSize?: string | number;
};
const Logo = ({ fontSize }: PropTypes) => {
  return (
    <Text
      fontSize={fontSize}
      background="linear-gradient(93.51deg, #9B51E0 2.84%, #3081ED 99.18%)"
      backgroundClip="text"
      textTransform="uppercase"
      fontWeight="bold"
      letterSpacing="1.5px"
    >
      DeUniversity
    </Text>
  );
};

Logo.defaultProps = {
  fontSize: '32px',
};

export default Logo;
