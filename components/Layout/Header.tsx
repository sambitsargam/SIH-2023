import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useMediaQuery,
  HStack,
  Container,
  useToast,
} from '@chakra-ui/react';
import { IoMenu } from 'react-icons/io5';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import web3 from 'web3';
import { Injected } from '../../config/connectors';
import MobileDrawer from './MobileDrawer';
import Logo from '../Logo/Logo';
import MenuLink from '../MenuLink/MenuLink';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mediaQuery] = useMediaQuery('(max-width: 991px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { activate, active, account, deactivate } = useWeb3React<Web3Provider>();

  const toast = useToast();
  const router = useRouter();

  const connect = () => {
    activate(Injected, (error: { message: any; }) => {
      toast({
        title: 'Error!',
        description: error.message,
        status: 'error',
        isClosable: true,
      });
    });
  };

  const handleConnect = async () => {
    if ((window as any)?.ethereum !== undefined) {
      (window as any).ethereum
        .request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: web3.utils.toHex('80001') }],
        })
        .then(() => {
          connect();
        })
        .catch((err: any) => console.log(err));
    }
  };

  useEffect(() => {
    Injected.isAuthorized().then((isAuthorized: any) => {
      if (isAuthorized) {
        handleConnect();
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Box py={4}>
      <Container maxW="container.xl">
        <Box>
          <Flex as="nav" justifyContent="space-between">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>

            {!isMobile && (
              <HStack gap={7}>
                <MenuLink link="/" text="home" />
                <MenuLink link="#!" text="about us" />
                <MenuLink link="#!" text="contact" />
                <Button variant="outline" onClick={active ? deactivate : handleConnect}>
                  {active ? 'Disconnect Wallet' : 'Connect Wallet'}
                </Button>
              </HStack>
            )}
            {isMobile && (
              <Button variant="link" onClick={onOpen}>
                <IoMenu size="30" />
              </Button>
            )}
          </Flex>
          <MobileDrawer onClose={onClose} isOpen={isOpen} />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
