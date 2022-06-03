import {
  Box,
  Text,
  Flex,
  Center,
  Avatar,
  Heading,
  AvatarBadge,
  Spacer
} from '@chakra-ui/react'
import { useContext } from 'react'
import { MessageContext } from '@/contexts/messagesContext'

type ConversationTypes = {
  conversation: {
    id: number
    avatar: string
    name: string
    lastMessageTime: string
    lastMessage: string
  }
}

export const ConversationCard = ({ conversation }: ConversationTypes) => {
  const controllersContext = useContext(MessageContext)
  const { conversationId, changeConversationId } = controllersContext

  const { id, avatar, name, lastMessageTime, lastMessage } = conversation
  return (
    <Box
      px="1.563rem"
      py="1.125rem"
      onClick={() => changeConversationId(conversation.id)}
      bg={conversationId === id ? 'main.200' : 'white'}
      _hover={{ cursor: 'pointer', bg: 'main.2-0' }}
    >
      <Box display='flex' mt='2' justifyContent='end'>
        <Text fontSize="0.625rem" color="gray.500">
              {lastMessageTime}
            </Text>
      </Box>
      <Flex>
        <Center>
          <Avatar mr="1.063rem" name="Fernanda Ester" src={avatar}>
            <AvatarBadge boxSize="1.25em" bg="main.500" color="white">
              <Text fontSize="10px">1</Text>
            </AvatarBadge>
          </Avatar>
        </Center>
        <Box>
          <Center mb="0.625rem">
            <Heading fontSize="0.938rem" color="black">
              {name}
            </Heading>
            <Spacer />            
          </Center>
          <Center>
            <Text noOfLines={1} fontSize="0.875rem">
              {lastMessage}
            </Text>
          </Center>
        </Box>
      </Flex>
    </Box>
    
  )
}
