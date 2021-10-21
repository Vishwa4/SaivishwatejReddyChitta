import Head from  'next/head'
import Navbar from '../navbar.js'
import { Box, Container, Image } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog'

const Main = ({ children, router}) => {
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-wedth, initial-scale=1" />
                <title>Saivishwatej Reddy Chitta - HomePage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <VoxelDog />
                {children}
            </Container>
        </Box>
    )
}

export default Main