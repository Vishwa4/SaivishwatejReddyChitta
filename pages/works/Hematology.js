import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Hematology">
    <Container>
      <Title>
        Hematology <Badge>2020-</Badge>
      </Title>
      <P>
      This project is used to classification of different types of blood cells by converting Image into text data using Convolutional Neural Networks (CNN) and Machine Learning(ML).
      With some modifications this project can be used in different appications like Image classification, object detection, segmentation, face recognition.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform:</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Technologies used:</Meta>
          <span>Python</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Hematology01.jpeg" alt="Hematology" />
      <WorkImage src="/images/works/Hematology02.jpeg" alt="Hematology" />
    </Container>
  </Layout>
)

export default Work