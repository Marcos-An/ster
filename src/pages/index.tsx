import { Text } from '@chakra-ui/react'

export default function Home() {
  return <Text color="main">Teste</Text>
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }
}
