import { useState } from 'react'
import {
  Text,
  Heading,
  Image,
  Box,
  Center,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Divider
} from '@chakra-ui/react'
import FeatherIcon from 'feather-icons-react'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => setShowPassword(!showPassword)

  return (
    <Box py={5}>
      <Center flexDirection="column" mb={16}>
        <Image
          boxSize="100px"
          objectFit="contain"
          src={'/logo.png'}
          mb={10}
          alt="logo"
        />

        <Heading color="yellow" size="md" mb={5}>
          Bem vindo de volta
        </Heading>
        <Text textAlign="center">
          Estamos felizes de te ver por aqui de novo!
        </Text>
      </Center>

      <Stack spacing={6}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="seu_email@mail.com" />
        </FormControl>
        <FormControl>
          <FormLabel>Senha</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={showPassword ? 'text' : 'password'}
              placeholder="*******"
            />
            <InputRightElement width="4.5rem" onClick={handleShowPassword}>
              {showPassword ? (
                <FeatherIcon icon="eye" />
              ) : (
                <FeatherIcon icon="eye-off" />
              )}
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Stack>
      <Button variant="main" mt={10}>
        Entrar
      </Button>
      <Center my={6}>
        <Divider mr={4} />
        ou
        <Divider ml={4} />
      </Center>
      <Button
        variant="outline"
        w="100%"
        leftIcon={
          <Image
            src={'assets/images/GoogleLogo.png'}
            alt="google-logo"
            mr={5}
          />
        }
      >
        Entrar com google
      </Button>
    </Box>
  )
}
