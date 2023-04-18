import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
} from '@chakra-ui/react';
import Logo from '../Logo/Logo';
import MenuLink from '../MenuLink/MenuLink';

type PropTypes = {
  onClose: () => void;
  isOpen: boolean;
};

const MobileDrawer = (props: PropTypes) => {
  const { onClose, isOpen } = props;
  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen} closeOnOverlayClick>
      <DrawerOverlay />
      <DrawerContent bg="#1F1D2B">
        <DrawerCloseButton fontSize={16} />
        <DrawerHeader borderBottomWidth="1px">
          <Logo />
        </DrawerHeader>
        <DrawerBody>
          <VStack alignItems="flex-start" gap={8} mt={5}>
            <MenuLink link="/" text="home" />
            <MenuLink link="#!" text="about us" />
            <MenuLink link="#!" text="contact" />
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
