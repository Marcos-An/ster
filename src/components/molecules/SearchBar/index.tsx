import { InputRightElement, Input, InputGroup } from '@chakra-ui/react'
import FeatherIcon from 'feather-icons-react'

export const SearchBar = () => {
  return (
    <InputGroup size="md">
      <Input
        type={'text'}
        variant="filled"
        backgroundColor="gray.800"
        _focus={{
          bg: 'gray.800'
        }}
        placeholder="Encontre uma conversa"
      />
      <InputRightElement>
        <FeatherIcon icon="search" size="1rem" color="#6D6D6D" />
      </InputRightElement>
    </InputGroup>
  )
}
