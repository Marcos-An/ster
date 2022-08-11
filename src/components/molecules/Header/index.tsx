import { Center, Text, HStack, Spacer, IconButton } from '@chakra-ui/react'
import FeatherIcon from 'feather-icons-react'

export const Header = ({ onClick }) => {
  return (
    <HStack borderBottomWidth={2} borderBottomColor="gray.500" p={4}>
      <IconButton
        variant="icon"
        aria-label="add-user"
        onClick={() => onClick()}
        icon={<FeatherIcon icon="menu" size="1.2rem" />}
      />

      <Center width="100%">
        <Text fontSize="lg">Contatos</Text>
        <Spacer />
        <IconButton
          variant="icon"
          aria-label="add-user"
          icon={<FeatherIcon icon="user-plus" size="1.2rem" />}
        />
      </Center>
    </HStack>
  )
}
