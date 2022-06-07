import { Grid, GridItem } from '@chakra-ui/react'
import { SearchBox } from '@/components/SearchBox'
import { DirectMessages } from '@/components/DirectMessages'

export const MainLayout = () => {
  return (
    <Grid templateColumns="0.23fr 0.77fr" gap={0}>
      <GridItem
        w="100%"
        h="100vh"
        bg="white"
        borderRightWidth={2}
        borderRightColor="gray.200"
      >
        <SearchBox />
        <DirectMessages />
      </GridItem>
      <GridItem w="100%" h="100vh" bg="gray.100" />
    </Grid>
  )
}
