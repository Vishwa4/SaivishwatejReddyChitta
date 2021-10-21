import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link, SimpleGrid, useColorModeValue, List, ListItem, Icon } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear} from '../components/bio'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import { IoLogoDiscord, IoLogoFacebook, IoLogoGithub, IoLogoGoogle, IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";

const pages = () => {
    return (
        <Layout>
        <Container>
            <Box borderRdius='lg' bg={useColorModeValue('whiteAlpha.800', 'gray.800')} p={3} mb={6} align="center">
                Hello, I&apos;m a Software Engineer
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Saivishwatej Reddy Chitta
                    </Heading>
                    <p> Digital Craftzman ( Developer )</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/saivishwatej.jpg" alt="Profile Image" /> 
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                Takuya is a freelance and a full-stack developer based in Osaka with a
                passion for building digital services/stuff he wants. He has a knack
                for all things launching products, from planning and designing all the
                way to solving real-life problems with code. When not online, he loves
                hanging out with his camera. Currently, he is living off of his own
                product called{' '}
                <NextLink href="/works/inkdrop">
                    <Link>Inkdrop</Link>
                </NextLink>
                .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme ="teal">
                            My Profilo
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1998</BioYear>
                    Born in Khammam, Telangana(State), India.
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Completed the Bachelor of Technology Program in Computer Science Engineering at MallaReddy Institute of Engineering and Technology 
                </BioSection>
                <BioSection>
                    <BioYear>2020 to present</BioYear>
                    Working as Software Engineer in VIT infotech
                </BioSection>
            </Section>

            <section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <Paragraph>
                    Playing chess, watching anime and Movies
                </Paragraph>
                {/* <Paragraph>
                    Art, Music,{' '}
                        <Link href="https://illust.odoruinu.net/" target="_blank">
                            Drawing
                        </Link>
                    , Playing Drums,{' '}
                    <Link href="https://500px.com/p/craftzdog" target="_blank">
                        Photography
                    </Link>
                    , Leica, Machine Learning
            </Paragraph> */}
            </section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    on the Web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/Vishwa4" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />} >
                                @Vishwa4
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/chitta-saivishwatej-reddy-279a72171/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />} >
                                Linkedin
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://discord.com/channels/@me" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />} >
                                Discord
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>

            <Section>
                <Heading as="h3" variant="section-title">
                    Contact details:
                </Heading>
                <List>
                    <ListItem>
                        <Icon as={IoLogoWhatsapp} /> +91 9505471032
                    </ListItem>
                    <ListItem>
                        <Icon as={IoLogoGoogle} /> vchitta4@gmail.com
                    </ListItem>
                </List>
            </Section>
        </Container>
        </Layout>
    )
}

export default pages