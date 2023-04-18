import { Box } from '@chakra-ui/react';
import AdminCardFooter from './AdminCardFooter';
import CardFooter from './CardFooter';

type PropTypes = {
  width: string | number;
  height: string | number;
  hoverEffect: boolean;
  isAdmin: boolean;
  title: string;
  note: string;
  date: string;
  likes: string;
  dislikes: string;
  comments: string;
  lat: number;
  lng: number;
};

const Card = (props: PropTypes) => {
  const { width, height, hoverEffect, isAdmin, lat, lng, ...rest } = props;

  return (
    <Box
      width={width}
      minH={height}
      borderRadius="30px"
      backdropFilter="blur(1110px)"
      background="gradient.card"
      border="1px solid"
      borderTopColor="rgba(251, 55, 255, 0.4)"
      borderRightColor="rgba(155, 111, 238, 0.6)"
      borderBottomColor="rgba(123, 127, 234, 0.7)"
      borderLeftColor="rgba(27, 178, 222, 0.5)"
      cursor="pointer"
      p={5}
      {...{
        ['_hover']: hoverEffect
          ? {
              background:
                'linear-gradient(103.91deg, #9B51E0 21.01%, rgba(48, 129, 237, 0.8) 100%)',
              backdropFilter: 'blur(1110px)',
            }
          : {},
      }}
    >
      {isAdmin ? <AdminCardFooter {...rest} /> : <CardFooter {...rest} />}
    </Box>
  );
};

Card.defaultProps = {
  width: '330px',
  height: '395px',
  hoverEffect: true,
  isAdmin: false,
  title: 'Mirpur C11',
  note: 'Land plot in the registry 1012',
  date: '18 Dec 2022 12:45 am',
  likes: '0',
  lat: 23.8223,
  lng: 90.3654,
  dislikes: '0',
  comments: '0',
};

export default Card;
