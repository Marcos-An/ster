import { ElementType } from 'react'
import { Header } from '@components/molecules/Header'
import { SearchBar } from '@components/molecules/SearchBar'
import { ContactCard } from '@components/molecules/ContactCard'
import FeatherIcon from 'feather-icons-react'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Heading,
  Box,
  Text,
  Flex,
  Spacer,
  Avatar,
  AvatarBadge,
  DrawerFooter,
  IconButton
} from '@chakra-ui/react'

export default function MainLayout(WrappedComponent: ElementType) {
  const MainLayout = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <Box>
        <Header onClick={onOpen} />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          autoFocus={false}
        >
          <DrawerOverlay />
          <DrawerContent backgroundColor="gray.700" pt={4}>
            <DrawerBody>
              <SearchBar />
              <Heading size="xs" mt={6} mb={4}>
                Mensagens Diretas
              </Heading>
              <ContactCard onDrawerMenu />
              <ContactCard onDrawerMenu />
              <ContactCard onDrawerMenu />
            </DrawerBody>

            <DrawerFooter>
              <Flex width="100%" alignItems="center">
                <Avatar size="sm">
                  <AvatarBadge
                    borderColor="gray.800"
                    boxSize="1.2em"
                    bg="green"
                  />
                </Avatar>
                <Box ml={4}>
                  <Heading size="xs">Marcos Silva</Heading>
                  <Text fontSize="xs">Disponivel</Text>
                </Box>
                <Spacer />
                <IconButton
                  variant="icon"
                  aria-label="settings"
                  icon={<FeatherIcon icon="settings" size="1.2rem" />}
                />
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <WrappedComponent {...props} />
      </Box>
    )
  }

  return MainLayout
}
