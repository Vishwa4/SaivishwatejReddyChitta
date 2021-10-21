import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="EVoting">
    <Container>
      <Title>
        EVoting <Badge>2020-</Badge>
      </Title>
      <P>
        This Project is mainly aimed at providing a secure and user-friendly online voting system for organizations. This system can also be used as a feedback management system and survey syatem
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform:</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Technologies used:</Meta>
          <span>Python, Flask</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/evoting01.jpg" alt="EVoting" />
      <WorkImage src="/images/works/evoting01.jpg" alt="EVoting" />
      <WorkImage src="/images/works/evoting03.png" alt="EVoting" />
    </Container>
  </Layout>
)

export default Work