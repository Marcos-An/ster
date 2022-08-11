import { useState, useRef } from 'react'
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
import { useRouter } from 'next/router'
import api from '@services/api'
import Cookie from 'js-cookie'

export default function Register() {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleShowPassword = () => setShowPassword(!showPassword)

  const submit = async () => {
    const user = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value
    }

    const { data } = await api.post('/auth/login', user)

    Cookie.set('token', data.token)

    if (data.token) {
      router.push('/contacts')
    }
  }

  return (
    <Box py={5} px="0.938rem">
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
          <Input
            type="email"
            placeholder="seu_email@mail.com"
            ref={emailInputRef}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Senha</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={showPassword ? 'text' : 'password'}
              placeholder="*******"
              ref={passwordInputRef}
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
      <Button variant="main" mt={10} onClick={submit}>
        Entrar
      </Button>
      <Center my={6}>
        <Divider mr={4} />
        ou
        <Divider ml={4} />
      </Center>
      <Center>
        <Button variant="outline" px={2} py={4}>
          <Image src={'assets/images/GoogleLogo.png'} alt="google-logo" />
        </Button>
      </Center>
      <Text textAlign="center" mt={16} fontSize="sm">
        Ainda não tem conta?
        <span
          style={{ color: '#309CFF', marginLeft: 5 }}
          onClick={() => router.push('/register')}
        >
          Registre-se aqui
        </span>
      </Text>
    </Box>
  )
}
