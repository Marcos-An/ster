import {
  Avatar,
  AvatarBadge,
  Flex,
  Heading,
  Text,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer
} from '@chakra-ui/react'
import FeatherIcon from 'feather-icons-react'
const MENU_ITEMS = [{ label: 'Ver perfil ' }, { label: 'Desfazer amizade' }]
const defaultFocusAndHover = { bg: 'gray.600' }
const deleteFocusAndHover = { bg: 'red.500', color: 'white' }

export const ContactCard = ({ onDrawerMenu = false }) => {
  return (
    <Flex
      py={3}
      px={onDrawerMenu ? 1 : 6}
      borderBottomWidth={1}
      borderBottomColor="gray.500"
      alignItems="center"
      _hover={{
        cursor: 'pointer',
        bg: 'gray.500',
        borderRadius: 6
      }}
    >
      <Avatar size="sm">
        <AvatarBadge borderColor="gray.800" boxSize="1.2em" bg="green" />
      </Avatar>
      <Box ml={4}>
        <Heading size="xs">Marcos Silva</Heading>
        {!onDrawerMenu && <Text fontSize="xs">Disponivel</Text>}
      </Box>
      <Spacer />

      {!onDrawerMenu && (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            variant="icon"
            icon={<FeatherIcon icon="more-vertical" />}
          />
          <MenuList backgroundColor="gray.800">
            {MENU_ITEMS.map((item) => (
              <MenuItem
                color={item.label === 'Desfazer amizade' ? 'red.500' : 'white'}
                key={item.label}
                _focus={
                  item.label === 'Desfazer amizade'
                    ? deleteFocusAndHover
                    : defaultFocusAndHover
                }
                _hover={
                  item.label === 'Desfazer amizade'
                    ? deleteFocusAndHover
                    : defaultFocusAndHover
                }
              >
                {item.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
    </Flex>
  )
}
