import { Box, Text } from '@chakra-ui/react'
import { ConversationCard } from '@/components/conversationCard'

const conversations = [
  {
    id: 1,
    avatar: 'https://bit.ly/ryan-florence',
    name: 'Fernanda Ester',
    lastMessageTime: '10:22',
    lastMessage:
      'Orem ipsum dolor sit amet, consectetur adipi ipsum dolor sit amet, consectetur adipi'
  },
  {
    id: 2,
    avatar: 'https://bit.ly/ryan-florence',
    name: 'Fernanda Ester',
    lastMessageTime: '10:22',
    lastMessage: 'Orem ipsum dolor sit amet, consectetur adipi'
  },
  {
    id: 3,
    avatar: 'https://bit.ly/ryan-florence',
    name: 'Fernanda Ester',
    lastMessageTime: '10:22',
    lastMessage: 'Orem ipsum dolor sit amet, consectetur adipi'
  }
]

export const DirectMessages = () => {
  return (
    <Box mb="2.5rem">
      <Text mx="1.125rem" mb="1.125rem" fontSize="0.813rem" color="gray.600">
        MENSAGENS DIRETAS
      </Text>
      {conversations.map((conversation) => (
        <ConversationCard key={conversation.id} conversation={conversation} />
      ))}
    </Box>
  )
}
