import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'


import thumbEVoting from '../public/images/works/evoting.jpg'
import thumbHematology from '../public/images/works/Hematology.jpg'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Academic Projects:
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <WorkGridItem id="EVoting" title="EVoting" thumbnail={thumbEVoting}>
            Online voting system for organizations
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="Hematology" title="Hematology" thumbnail={thumbHematology}>
            Classification of different types of blood cells
          </WorkGridItem>
        </Section>

      </SimpleGrid>



      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section> */}


    </Container>
  </Layout>
)

export default Works
