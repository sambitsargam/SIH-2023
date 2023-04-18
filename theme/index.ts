import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: '#D7D7D7',
        background: '#1F1D2B',
      },
    },
  },
  colors: {
    white: {
      100: '#E2E2E2',
      200: '#D7D7D7',
    },
    gray: {
      100: '#BCBCBC',
    },
    pink: {
      100: '#FB37FF',
    },
    cyan: {
      100: '#18B2DE',
    },
    chocolate: {
      100: '#302D42',
      200: '#272435',
    },
    gradient: {
      button: 'linear-gradient(103.91deg, #9B51E0 21.01%, rgba(48, 129, 237, 0.8) 100%)',
      step: 'linear-gradient(93.51deg, #9B51E0 2.84%, #3081ED 99.18%)',
      card: 'linear-gradient(169.44deg, rgba(58, 129, 191, 0.08) 1.85%, rgba(65, 48, 90, 0.08) 98.72%)',
    },
  },

  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  components: {
    Button: {
      variants: {
        outline: {
          color: 'gray.100',
          borderColor: 'white.200',
          _active: {
            color: 'white',
            background: 'gradient.button',
          },
          _hover: {
            color: 'white',
            background: 'gradient.button',
            borderColor: 'transparent',
          },
        },
        solid: {
          color: 'white',
          background: 'gradient.button',
          border: '2px solid',
          borderColor: 'white.200',
          _active: {
            color: 'gray.100',
            background: 'transparent',
            border: '2px solid',
            borderColor: 'white.200',
          },
          _hover: {
            color: 'gray.100',
            background: 'transparent',
            border: '2px solid',
            borderColor: 'white.200',
            _disabled: {
              color: 'white.200',
              background: 'transparent',
              border: '2px solid',
              borderColor: 'white.200',
            },
          },
        },
      },
    },
  },
});

export default customTheme;
