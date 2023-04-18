import Link from 'next/link';
import { Text } from '@chakra-ui/react';

type PropTypes = {
  text: string;
  link: string;
};
const MenuLink = ({ link, text }: PropTypes) => {
  return (
    <Link href={link}>
      <a>
        <Text
          borderBottom="1.5px solid transparent"
          textTransform="uppercase"
          fontWeight="bold"
          color="gray.100"
          _hover={{
            background: 'linear-gradient(93.51deg, #9B51E0 2.84%, #3081ED 99.18%)',
            backgroundClip: 'text',
            borderBottom: '1.5px solid #9B51E0',
          }}
        >
          {text}
        </Text>
      </a>
    </Link>
  );
};

export default MenuLink;
