import { Container, Center, Loader } from '@mantine/core'

const CenterLoader = () => {
  return (
    <Container sx={{ minWidth: 1000, height: 450 }}>
      <Center style={{ margin: '10rem' }}>
        <Loader size="xl" />
      </Center>
    </Container>
  )
}

export default CenterLoader
