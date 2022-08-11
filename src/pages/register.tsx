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

export default function Register() {
  const nameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null)

  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleShowPassword = () => setShowPassword(!showPassword)

  const submit = async () => {
    const newUser = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
      confirmPassword: confirmPasswordInputRef.current.value
    }

    const res = await api.post('/auth/register', newUser)
  }

  return (
    <Box py={5} px="0.938rem">
      <Center flexDirection="column">
        <Image
          boxSize="70px"
          objectFit="contain"
          src={'/logo.png'}
          mb={6}
          alt="logo"
        />
      </Center>
      <Heading color="yellow" size="md" mb={8}>
        Registre-se
      </Heading>
      <Button variant="outline" px={2} py={4}>
        <Image src={'assets/images/GoogleLogo.png'} alt="google-logo" />
      </Button>
      <Center my={4}>
        <Divider mr={4} /> ou <Divider ml={4} />
      </Center>
      <Stack spacing={6}>
        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input ref={nameInputRef} type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            ref={emailInputRef}
            type="email"
            placeholder="seu_email@mail.com"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Senha</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              ref={passwordInputRef}
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
        <FormControl>
          <FormLabel>Confirmar senha</FormLabel>
          <Input
            ref={confirmPasswordInputRef}
            pr="4.5rem"
            placeholder="*******"
          />
        </FormControl>
      </Stack>
      <Button variant="main" mt={6} onClick={submit}>
        Registre-se
      </Button>

      <Text textAlign="center" mt={6} fontSize="sm">
        Já tem conta aqui?
        <span
          style={{ color: '#309CFF', marginLeft: 5 }}
          onClick={() => router.push('/login')}
        >
          login
        </span>
      </Text>
    </Box>
  )
}
