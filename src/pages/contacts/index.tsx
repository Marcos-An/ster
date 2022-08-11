import WithAuth from '@utils/withAuth'
import MainLayout from '@layout/MainLayout'
import { ContactCard } from '@components/molecules/ContactCard'
import { Box } from '@chakra-ui/react'

function Contacts() {
  return (
    <Box>
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </Box>
  )
}

export default WithAuth(MainLayout(Contacts))
