import {
  Center,
  Stack,
  Group,
  Title,
  Text,
  Button,
  createStyles,
} from '@mantine/core'
import RootNavbar from '../components/Root/Navbar/RootNavbar.jsx'
import { SIGN_UP_LINK } from '../services/constants/links.js'

const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: 768,
  },
}))

const Root = () => {
  const { classes } = useStyles()

  const handleGetStarted = () => window.location.assign(SIGN_UP_LINK)

  return (
    <>
      <RootNavbar />
      <Center>
        <Stack>
          <Group p={30} className={classes.container}>
            <Title>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Title>
          </Group>
          <Group px={30} className={classes.container}>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur repudiandae sit ipsa explicabo dolore saepe voluptate,
              vel velit quo! Iure nobis voluptas in. Eligendi, voluptatum dolor
              nisi fugit nihil quam?
            </Text>
          </Group>
          <Group px={30} pt={30} className={classes.container}>
            <Button size="xl" onClick={handleGetStarted}>
              Get Started
            </Button>
          </Group>
        </Stack>
      </Center>
    </>
  )
}

export default Root
