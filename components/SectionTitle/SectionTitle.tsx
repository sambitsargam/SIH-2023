import { Box, Text } from '@chakra-ui/react';

type PropTypes = {
  title: string;
  position: 'left' | 'right';
};

const SectionTitle = ({ title, position }: PropTypes) => {
  const positionCapital = position === 'left' ? 'Left' : 'Right';
  const positionAlt = position === 'left' ? 'right' : 'left';
  const positionAltCapital = position === 'left' ? 'Right' : 'Left';

  return (
    <Box
      border="1px solid"
      borderColor="white.200"
      position="absolute"
      w="320px"
      p="2"
      {...{
        [position]: 0,
        [`border${positionAltCapital}Radius`]: '10px',
        [`border${positionCapital}`]: 'none',
        [`padding${positionAltCapital}`]: '5',
      }}
    >
      <Text
        fontSize="md"
        fontWeight="bold"
        textTransform="capitalize"
        textAlign={positionAlt}
        letterSpacing="4px"
      >
        {title}
      </Text>
    </Box>
  );
};

SectionTitle.defaultProps = {
  position: 'left',
};

export default SectionTitle;
