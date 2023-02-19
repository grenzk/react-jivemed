import { Container, Center, Loader } from '@mantine/core'

const CenterLoader = () => {
  return (
    <Container sx={{ minWidth: 1000, height: 450 }}>
      <Center>
        <Loader size="xl" style={{ marginTop: '10rem' }} />
      </Center>
    </Container>
  )
}

export default CenterLoader
